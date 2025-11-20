# TODO_MAXIMO · becasDigMeow2

## 1. Fundamentos y setup del proyecto
1. [x] Crear el nuevo repositorio (p.ej. `becasdigmeow2/haztuweb`), clonar el código actual y actualizar el remoto.
2. [x] Actualizar README con nombre final, descripción breve de la beca y pasos para correr el proyecto en clase local.
3. [x] Añadir `.gitignore` (al menos `*.DS_Store`, `node_modules`, builds) y limpiar rastros del historial (`git rm --cached`).

## 2. Arquitectura de información y contenidos
1. [ ] Definir estructura final de la landing: Hero, Cómo funciona, Qué incluye/Qué esperamos, Proyectos, FAQ, ¿Hablamos? + secciones complementarias (ticker/contexto).
2. [ ] Mapear textos actuales y nuevos dentro de esa estructura; eliminar o archivar los bloques “tocho” que ya no encajen.
3. [ ] Redactar copys definitivos para “Qué es la beca” y “Cómo funciona” (3 pasos concretos) + bullets “para quién es/no es”, “qué incluye”, “compromisos”.
4. [ ] Definir microcopy para CTAs clave (Hero, bloque intermedio, footer/contacto) y asegurar que cada sección relevante termina con una llamada clara.
5. [ ] Completar las traducciones ES/EN/FR/CAT para todos los textos que quedarán visibles; si algún bloque no va a estar traducido, decidir si se oculta hasta disponer del contenido.

## 3. UX/UI y sistema visual
1. [ ] Revisar tipografía y ritmo: usar serif solo en titulares, introducir una sans para body copy, limitar anchos de texto y reestructurar secciones largas con bullets/destacados.
2. [ ] Diseñar la nueva jerarquía visual mobile-first (espaciados, tamaños de encabezado, cards reutilizables) y documentarla con CSS variables (`--color`, `--space`, radios, sombras, etc.).
3. [ ] Distribuir las CTAs a lo largo del flujo (Hero, tras “por qué”, secciones proceso/FAQ, final) asegurando contraste AA en todos los temas.
4. [ ] Implementar/elaborar el nav con anchors (“Qué es”, “Cómo funciona”, “Proyectos”, “FAQ”, “Aplicar”), incluyendo versión móvil (hamburguesa o scroll) y botones explicados en texto + icono.
5. [ ] Ajustar el hero/nube y el panel de controles para que tengan margen seguro en móviles (`safe-area`), labels comprensibles y posibilidad de moverlos fuera de la zona de lectura si molestan.
6. [ ] Mostrar siempre un resumen visible del proyecto en cada card (no depender solo de hover/tap) y añadir controles manuales para navegar el slideshow.

## 4. Interacción y funcionalidades
1. [ ] Implementar el ticker/marquee superior localizable: hora + clima + tema activo, sincronizado con cambios de idioma/tema y respetando `prefers-reduced-motion`.
2. [ ] Reforzar el multilenguaje: `LANGS`, `textosMain`, `websRealizadas` centralizados; botón ciclando idiomas, persistencia `localStorage` + `?lang=XX`, actualización de `<html lang>` y `<title>`.
3. [ ] Iterar la galería: soporte de múltiples imágenes por proyecto con precarga, fade respirando, `IntersectionObserver` para pausar fuera de viewport y respeto a `prefers-reduced-motion`.
4. [ ] Alinear los controles flotantes (tema, nubes, idioma) con labels claros, tooltips/`aria-label`, y mantenerlos fijos sin saltos en iOS (`viewport-fit=cover`, `env(safe-area-*)`).
5. [ ] Añadir/actualizar la sección “Proceso / Cobro” con textos i18n y pequeños CTA contextuales (reserva llamada, descarga checklist, etc.).
6. [x] Renderizar las cards de proyectos con `createElement`/`textContent` en lugar de plantillas concatenadas para crecer sin XSS ni duplicar markup.
7. [ ] Guardar los IDs de `setInterval` de la galería y detenerlos (`clearInterval`) cuando el `IntersectionObserver` saque la card del viewport para evitar consumo extra.
8. [ ] Reutilizar (o desconectar al terminar) un único `IntersectionObserver` cuando se reconfigure el slideshow para no acumular entradas antiguas.

## 5. Performance, accesibilidad y mantenimiento
1. [ ] Optimizar `galeria/`: exportar WebP/AVIF, añadir `srcset`/`sizes`, limitar anchura real y medir peso antes/después (`du -h`).
2. [ ] Reescribir el slideshow/fondo para ser ligero: reducir nubes (6–12 en móvil, menos cuando `prefers-reduced-motion`), ofrecer un modo estático y pausar animaciones cuando el usuario lo solicite.
3. [ ] Cachear el tema en `localStorage` (último estado/clima) y aplicarlo antes del primer paint; usar `prefers-color-scheme` + hora local como fallback para evitar flashes.
4. [x] Separar CSS/JS en archivos (`styles/main.css`, `scripts/main.js`), servirlos con `defer`/`preload` y preparar el terreno para minificación/cache.
5. [ ] Revisar contrastes WCAG AA en todos los temas (especialmente CTA amarilla en modo claro) y ajustar paleta si es necesario.
6. [ ] Ejecutar checklist de QA: mobile-first, anchors, dark/light, idioma persistente, `aria-live` donde corresponda, slideshow sin parpadeos, animaciones pausadas fuera de viewport, `.gitignore` limpio.
7. [ ] Documentar en el repo (README o `/docs`) los toggles disponibles (tema, idioma, nubes, ticker) y cómo desactivar los “juguetes” en caso de necesitar un modo focus.
8. [x] Hacer `makeSrc` tolerante a extensiones variadas (dataset con extensión real o fallback automático mediante `Image.decode`/`fetch`) para evitar 404 silenciosos.
9. [x] Cachear `data/sunlight.json` en `localStorage` con timestamp y reutilizarlo durante unas horas para reducir fetchs repetidos.
10. [ ] Completar marcado estructurado opcional para snippets: (a) bloque FAQPage con 3–5 preguntas/respuestas reales y visibles en la página; (b) BreadcrumbList solo si se crean subpáginas. (Organization ya añadido).
11. [x] Implementar preload de fuentes y verificar FOUT/FOIT (ya añadido para Inknut; extender a otras fuentes si se suman).
12. [ ] Validar rich results y previews sociales tras cada deploy (Google Rich Results, FB Sharing Debugger, Twitter Card Validator).
