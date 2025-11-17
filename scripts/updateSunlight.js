'use strict';

const { mkdir, writeFile } = require('node:fs/promises');
const path = require('node:path');

const LAT = 41.3874;
const LON = 2.1686;
const CITY_TIMEZONE = 'Europe/Madrid';
const EXTRA_NEXT_MONTH_DAYS = 5;
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'sunlight.json');
const API_ENDPOINT = 'https://api.sunrise-sunset.org/json';

function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

function addDaysUTC(date, days) {
  const copy = new Date(date);
  copy.setUTCDate(copy.getUTCDate() + days);
  return copy;
}

function getMadridYearMonth(date = new Date()) {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: CITY_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  const parts = formatter.formatToParts(date).reduce((acc, part) => {
    if (part.type === 'year') acc.year = Number(part.value);
    if (part.type === 'month') acc.month = Number(part.value);
    if (part.type === 'day') acc.day = Number(part.value);
    return acc;
  }, {});
  return {
    year: parts.year,
    month: (parts.month || 1) - 1,
    day: parts.day || 1
  };
}

async function fetchSunlightFor(dateStr) {
  const url = `${API_ENDPOINT}?lat=${LAT}&lng=${LON}&date=${dateStr}&formatted=0`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Sunrise-Sunset API responded with ${res.status} for ${dateStr}`);
  }
  const payload = await res.json();
  if (payload.status !== 'OK' || !payload.results) {
    throw new Error(`Unexpected response for ${dateStr}: ${JSON.stringify(payload)}`);
  }
  const r = payload.results;
  return {
    sunriseUtc: r.sunrise,
    sunsetUtc: r.sunset
  };
}

async function main() {
  const { year, month } = getMadridYearMonth();
  const periodStart = new Date(Date.UTC(year, month, 1));

  const nextMonth = month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 };
  const periodEnd = addDaysUTC(new Date(Date.UTC(nextMonth.year, nextMonth.month, 1)), EXTRA_NEXT_MONTH_DAYS - 1);

  const days = {};
  let cursor = new Date(periodStart);
  while (cursor <= periodEnd) {
    const iso = toISODate(cursor);
    /* eslint-disable no-await-in-loop */
    const info = await fetchSunlightFor(iso);
    /* eslint-enable no-await-in-loop */
    days[iso] = info;
    console.log(`✔️  ${iso}`);
    cursor = addDaysUTC(cursor, 1);
  }

  const output = {
    meta: {
      generatedAtUtc: new Date().toISOString(),
      timezone: CITY_TIMEZONE,
      latitude: LAT,
      longitude: LON,
      startDate: toISODate(periodStart),
      endDate: toISODate(periodEnd)
    },
    days
  };

  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
  console.log(`Sunlight data written to ${path.relative(process.cwd(), OUTPUT_PATH)}`);
}

main().catch((err) => {
  console.error('Failed to update sunlight data.');
  console.error(err);
  process.exitCode = 1;
});
