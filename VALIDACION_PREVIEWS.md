# Validar rich results y previews sociales

Pasos tras subir cambios (usa siempre la URL pública que toque):

1) **Google Rich Results**  
   - https://search.google.com/test/rich-results  
   - Pega `https://meowrhino.github.io/becasdigmeow2/` y ejecuta.  
   - Revisa avisos/errores en schema.org (Person/WebSite).

2) **Facebook Sharing Debugger**  
   - https://developers.facebook.com/tools/debug/  
   - Pega la URL, pulsa “Debug” y luego “Scrape Again”.  
   - Comprueba que la imagen OG, título y descripción son correctos.

3) **Twitter Card Validator**  
   - https://cards-dev.twitter.com/validator  
   - Pega la URL y valida.  
   - Verifica que muestra la summary_large_image esperada.

Si hay avisos, toma nota textual de los mensajes; con eso se puede ajustar meta tags o JSON-LD rápidamente.
