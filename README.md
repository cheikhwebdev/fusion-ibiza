# Fusión Ibiza – Web del restaurante

Web oficial del restaurante **Fusión Ibiza** (Figueretes, Ibiza), un cliente real.
El sitio está en producción: **[fusionibiza.com](https://fusionibiza.com)**

## Funcionalidades

- **Multilingüe (5 idiomas):** español, inglés, francés, italiano y alemán. Sistema propio con atributos `data-i18n`, que recuerda el idioma elegido (`localStorage`) y detecta el idioma del navegador.
- **Carta completa:** comida, desayunos y bebidas, organizados por categorías.
- **Carrusel de imágenes** en la cabecera con transición suave.
- **Galería con lightbox:** ampliar fotos, navegar con flechas y teclado, cerrar con Escape.
- **Diseño responsive** con menú hamburguesa en móvil.
- **SEO:** metaetiquetas, Open Graph, datos estructurados (schema.org), `sitemap.xml` y `robots.txt`.
- **Reservas** conectadas con Google.

## Tecnologías

- HTML5 semántico
- CSS3 (Flexbox, Grid, media queries)
- JavaScript (sin librerías)
- Despliegue en Netlify con dominio propio y HTTPS

## Estructura

```
index.html          → estructura de la página
style.css           → estilos
script.js           → idiomas, carrusel, menú móvil, galería
traducciones.js     → textos en los 5 idiomas
img/                → imágenes
```

## Autor

**Cheikh Gueye Ba** – Desarrollador web
GitHub: [@cheikhwebdev](https://github.com/cheikhwebdev)

> Proyecto realizado para un cliente real. Las fotos y los textos pertenecen al restaurante Fusión Ibiza.
