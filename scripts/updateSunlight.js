'use strict';

const { mkdir, writeFile } = require('node:fs/promises');
const path = require('node:path');

const LAT = 41.3874;
const LON = 2.1686;
const CITY_TIMEZONE = 'Europe/Madrid';
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'sunlight.json');
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/onecall';
const DAYS_TO_KEEP = 10; // data for ~1.5 semanas para cubrir margen

const API_KEY = process.env.OPENWEATHER_API_KEY;

if (!API_KEY) {
  console.error('Missing OPENWEATHER_API_KEY env var.');
  process.exit(1);
}

function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

function formatLocalTime(epochSeconds) {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: CITY_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
  return formatter.format(epochSeconds * 1000);
}

async function fetchForecast() {
  const url = `${API_ENDPOINT}?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&exclude=current,minutely,hourly,alerts`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`OpenWeatherMap responded with ${res.status}`);
  }
  return res.json();
}

async function main() {
  const data = await fetchForecast();
  if (!Array.isArray(data.daily) || data.daily.length === 0) {
    throw new Error('OpenWeatherMap response does not contain daily forecast data.');
  }

  const days = {};
  data.daily.slice(0, DAYS_TO_KEEP).forEach((day) => {
    const dateStr = toISODate(new Date(day.dt * 1000));
    days[dateStr] = {
      sunriseUnix: day.sunrise,
      sunsetUnix: day.sunset,
      sunriseUtc: new Date(day.sunrise * 1000).toISOString(),
      sunsetUtc: new Date(day.sunset * 1000).toISOString(),
      sunriseLocal: formatLocalTime(day.sunrise),
      sunsetLocal: formatLocalTime(day.sunset)
    };
  });

  const output = {
    meta: {
      generatedAtUtc: new Date().toISOString(),
      timezone: CITY_TIMEZONE,
      latitude: LAT,
      longitude: LON,
      source: 'api.openweathermap.org/data/2.5/onecall',
      daysIncluded: Object.keys(days).length
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
