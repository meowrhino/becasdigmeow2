# becasdigmeow2

Sitio estático para la beca de digitalización de meowrhino. Aquí se experimenta con temas dinámicos, selector de idioma y una galería de proyectos generada desde datos locales.

## Estado actual
- Código principal en `index.html` con estilos embebidos y un bloque JS que controla temas, clima, nubes y multilenguaje.
- Galería de proyectos en `galeria/` y textos auxiliares en `txts/`.
- `TODO_MAXIMO.md` centraliza los siguientes pasos priorizados.

## Cómo trabajar en local
1. Instala dependencias si hiciera falta (por ahora no son necesarias para ver la web, basta con los archivos estáticos).
2. Lanza un servidor estático o abre `index.html` directamente en el navegador. Ejemplo con Node 18+:
   ```bash
   npx serve .
   ```
3. Edita `index.html`, `galeria/` y los TODO según la guía en `TODO_MAXIMO.md`.

## Próximos pasos
Revisa `TODO_MAXIMO.md` para ver el backlog consolidado (setup, arquitectura de contenido, UX, interacciones y performance). Cada bloque está ordenado por prioridad para guiar la siguiente iteración.
