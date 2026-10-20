# SURVEC Web

Sitio estatico de SURVEC / GeoTopografia listo para publicar.

## Estructura

- `index.html`: entrada principal.
- `styles.css`: estilos generales y responsive.
- `intro.css`: estilos de intro de marca.
- `main.js`: navegacion por vistas, animaciones y contenido dinamico.
- `intro.js`: intro animada.
- `assets/brand/`: piezas de marca usadas por la intro y footer.
- `imagenes/`: originales PNG de las vistas. El sitio usa las versiones WebP de `imagenes/web/` (480, 800 y 1200 px de ancho).
- `logos/`: logotipo; el header usa `logos/web/logotipo.webp`.
- `vendor/`: GSAP alojado localmente.
- `api/send.js`: envío del formulario de cotización con Resend (requiere `RESEND_API_KEY` en Vercel).
- `vercel.json`: cabeceras de cache para imágenes y scripts.

## Publicacion

Puede publicarse como sitio estatico en GitHub Pages, Netlify, Vercel o cualquier hosting que sirva HTML/CSS/JS.

No requiere build ni instalacion de dependencias. Abrir `index.html` funciona directamente, con conexion a internet para cargar Google Fonts.

## Imagenes nuevas

Al reemplazar una foto, generar sus WebP de 480, 800 y 1200 px en `imagenes/web/` con el mismo nombre y subir `IMG_VERSION` en `main.js` para que los navegadores no usen la version en cache.
