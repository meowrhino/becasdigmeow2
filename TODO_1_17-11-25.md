# TODO – becasdigmeow2

## 0. Setup de proyecto

- [ ] Crear nuevo repositorio en GitHub para la versión 2 (nombre provisional: `becasdigmeow2` o `haztuweb`).
- [ ] Duplicar el código del repo actual en una carpeta nueva y conectarla al nuevo repo.
- [ ] Actualizar README con:
  - [ ] Nombre nuevo del proyecto.
  - [ ] Breve descripción de la beca.
  - [ ] Cómo arrancar el proyecto en local.

---

## 1. Arquitectura de la información

- [ ] Definir secciones finales de la landing:
  - [ ] Hero / Qué es la beca
  - [ ] Cómo funciona
  - [ ] Qué incluye / Qué esperamos de ti
  - [ ] Proyectos realizados
  - [ ] Preguntas frecuentes (FAQ)
  - [ ] ¿Hablamos? (contacto / aplicar)
- [ ] Mapear textos actuales + textos nuevos en estas secciones.
- [ ] Eliminar/archivar texto duplicado o que ya no encaje (modo “tocho”).

---

## 2. Contenidos clave (copys)

- [ ] Escribir versiones definitivas de:
  - [ ] “Qué es la beca” (resumen + párrafo ampliado).
  - [ ] “Cómo funciona” (3 pasos claros).
- [ ] Definir bullets para:
  - [ ] “Para quién es / para quién no es”.
  - [ ] “Qué incluye la beca”.
  - [ ] “Qué esperamos de ti / compromisos”.
- [ ] Definir microcopy de CTAs:
  - [ ] Hero (ej: “Aplicar a la beca”).
  - [ ] Bloque intermedio (ej: “Reservar una llamada”).
  - [ ] Footer/contacto (ej: “Escríbeme para la beca”).

---

## 3. Layout y navegación

- [ ] Implementar estructura de secciones en HTML semántico:
  - [ ] `<header>`, `<main>`, `<section>`, `<footer>`.
- [ ] Crear patrón de sección reutilizable:
  - [ ] `h2` + subtítulo.
  - [ ] Párrafo corto.
  - [ ] Cards / lista / bullets.
  - [ ] CTA (cuando aplique).
- [ ] Añadir un nav funcional (con anchors):
  - [ ] “Qué es”
  - [ ] “Cómo funciona”
  - [ ] “Proyectos”
  - [ ] “FAQ”
  - [ ] “Aplicar”
- [ ] Versión móvil:
  - [ ] Resolver cómo se ve el nav (hamburguesa o scroll horizontal sencillo).

---

## 4. Sistema visual y temas (dark / light)

- [ ] Definir sistema de diseño con CSS variables:
  - [ ] Colores base (`--bg`, `--fg`, `--accent`, etc.).
  - [ ] Espaciados (`--space-sm`, `--space-md`, `--space-lg`).
  - [ ] Radios, sombras, etc.
- [ ] Implementar dos skins:
  - [ ] Tema dark.
  - [ ] Tema light.
- [ ] Añadir toggle de tema (botón o icono) que:
  - [ ] Cambie una clase en `<html>` o `<body>`.
  - [ ] Respete `prefers-color-scheme` si quieres.
- [ ] Revisar contrastes en ambos temas:
  - [ ] Comprobar que todos los textos superan WCAG AA.
  - [ ] Ajustar amarillo/acento si hace falta para mejorar legibilidad.
- [ ] Limitar la paleta:
  - [ ] 1 color de fondo principal.
  - [ ] 1 color de texto principal.
  - [ ] 1 color de acento (acciones).
  - [ ] 1 color secundario (hover/estados).

---

## 5. CTAs y flujo de aplicación

- [ ] Colocar CTA principal en:
  - [ ] Hero.
  - [ ] Tras el primer bloque “por qué querrías una web”.
  - [ ] Sección final “¿hablamos?”.
- [ ] Definir qué hace el CTA:
  - [ ] Mailto con asunto pre-rellenado **o**
  - [ ] Enlace a formulario externo / embed.
- [ ] Crear sección “Cómo funciona” con 3 pasos:
  - [ ] Paso 1: Enviar info / rellenar formulario.
  - [ ] Paso 2: Llamada corta.
  - [ ] Paso 3: Confirmación + presupuesto.

---

## 6. Proyectos realizados

- [ ] Preparar cards de proyectos:
  - [ ] Captura (desktop/móvil).
  - [ ] Tipo de cliente / proyecto.
  - [ ] 1–2 líneas: qué se hizo y qué cambió.
- [ ] Implementar el grid de proyectos con el nuevo sistema de cards.

---

## 7. FAQ y microcopy

- [ ] Definir 3–5 preguntas frecuentes mínimas:
  - [ ] ¿Qué tipo de proyectos entran?
  - [ ] ¿Qué nivel técnico necesito?
  - [ ] ¿Cuánto tiempo dura el proceso?
  - [ ] ¿Qué pasa si no tengo todo el dinero?
- [ ] Escribir respuestas cortas, claras y sin dramas.
- [ ] Revisar tono general (mezcla entre claro/gente normal y Manu-rallada amable).

---

## 8. Juguetes y modos (opcional / fase posterior)

- [ ] Decidir qué juguetes se traen a la v2:
  - [ ] Nubes más calmadas.
  - [ ] Ticker discreto o en zona secundaria.
- [ ] Pensar un posible “modo focus”:
  - [ ] Botón que reduce animaciones / fondos, deja texto en limpio.
- [ ] Asegurarse de que:
  - [ ] Los juguetes nunca bloquean la lectura.
  - [ ] Pueden desactivarse fácilmente.

---

## 9. QA y lanzamiento

- [ ] Revisar versión móvil (ancho pequeño, scroll, nav).
- [ ] Comprobar que todos los enlaces y anchors funcionan.
- [ ] Testear dark/light en varios bloques de texto.
- [ ] Revisar copys finales (faltas, coherencia).
- [ ] Preparar texto corto para compartir la beca en redes (no necesariamente aquí, pero anotado).