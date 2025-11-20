# Cuando pases a dominio propio

Checklist para actualizar todo rápido:

1) Cambia referencias de URL en `index.html`
   - `<link rel="canonical">`
   - `og:url`, `og:image`
   - `twitter:url`, `twitter:image`
   - `@context` Person/WebSite: campo `url`
   - Si el favicon u og-image se sirven desde el nuevo dominio/CDN, actualiza las rutas.

2) Robots y sitemap
   - `robots.txt`: apunta `Sitemap:` a `https://TU_DOMINIO/sitemap.xml`.
   - `sitemap.xml`: actualiza `<loc>` y `<lastmod>` (formato YYYY-MM-DD). Añade más URLs si hay páginas nuevas.

3) Redirecciones
   - Mantén 301 del subdominio viejo al nuevo para conservar equity.

4) Search Console / Analytics
   - Verifica el nuevo dominio, sube sitemap y revisa cobertura.

5) Previews sociales
   - Genera una nueva imagen OG si quieres branding del dominio. Usa la URL absoluta nueva.
