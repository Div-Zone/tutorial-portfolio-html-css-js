---
sidebar_position: 3
---

# Uso de etiquetas semánticas

`<header>`, `<nav>`, `<section>` y `<article>`.

Las etiquetas semánticas en HTML5 ayudan a estructurar mejor el contenido de una página web, haciendo que sea más comprensible tanto para los desarrolladores como para los navegadores y motores de búsqueda. A continuación, exploraremos algunas de las etiquetas semánticas más importantes: `<header>`, `<nav>`, `<section>`, `<article>`, y `<footer>`.
`<header>`

La etiqueta `<header>` se utiliza para definir el encabezado de una sección o de un documento. Este encabezado puede contener elementos como logotipos, títulos, menús de navegación, etc.

```html title="HTML"
<!DOCTYPE html>
<html>
  <head>
    <title>Página de Ejemplo</title>
  </head>
  <body>
    <header>
      <h1>Bienvenido a Mi Sitio Web</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Sobre Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  </body>
</html>
```

En este ejemplo, el `<header>` contiene un título y un menú de navegación.

La etiqueta `<nav>` se usa para definir un bloque de enlaces de navegación. Normalmente, contiene un menú principal del sitio web o un conjunto de enlaces a otras páginas o secciones del sitio.

```html title="HTML"
<!DOCTYPE html>
<html>
  <head>
    <title>Página de Ejemplo</title>
  </head>
  <body>
    <header>
      <h1>Bienvenido a Mi Sitio Web</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Sobre Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
    <section id="inicio">
      <h2>Inicio</h2>
      <p>Bienvenidos a nuestro sitio web.</p>
    </section>
    <section id="sobre">
      <h2>Sobre Nosotros</h2>
      <p>Somos una empresa dedicada a ...</p>
    </section>
    <section id="contacto">
      <h2>Contacto</h2>
      <p>Puede contactarnos a través de ...</p>
    </section>
  </body>
</html>
```

Aquí, `<nav>` contiene una lista de enlaces de navegación que llevan a diferentes secciones del documento.
`<section>`

La etiqueta `<section>` se utiliza para definir una sección de un documento. Puede contener uno o más encabezados y está destinada a agrupar contenido relacionado.

```html title="HTML"
<!DOCTYPE html>
<html>
  <head>
    <title>Página de Ejemplo</title>
  </head>
  <body>
    <header>
      <h1>Bienvenido a Mi Sitio Web</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Sobre Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
    <section id="inicio">
      <h2>Inicio</h2>
      <p>Bienvenidos a nuestro sitio web.</p>
    </section>
    <section id="sobre">
      <h2>Sobre Nosotros</h2>
      <p>Somos una empresa dedicada a ...</p>
    </section>
    <section id="contacto">
      <h2>Contacto</h2>
      <p>Puede contactarnos a través de ...</p>
    </section>
  </body>
</html>
```

En este ejemplo, cada `<section>` agrupa contenido que pertenece a diferentes partes de la página: Inicio, Sobre Nosotros, y Contacto.
`<article>`

La etiqueta `<article>` se utiliza para contener contenido independiente y autónomo, como artículos, entradas de blog, comentarios, etc. Cada `<article>` debe tener sentido por sí mismo, incluso si se extrajera del documento.

```html title="HTML"
<!DOCTYPE html>
<html>
  <head>
    <title>Página de Ejemplo</title>
  </head>
  <body>
    <header>
      <h1>Bienvenido a Mi Blog</h1>
      <nav>
        <ul>
          <li><a href="#articulo1">Artículo 1</a></li>
          <li><a href="#articulo2">Artículo 2</a></li>
        </ul>
      </nav>
    </header>
    <section>
      <article id="articulo1">
        <h2>Primer Artículo</h2>
        <p>Este es el contenido del primer artículo.</p>
        <footer>Publicado por Juan el 1 de enero de 2024</footer>
      </article>
      <article id="articulo2">
        <h2>Segundo Artículo</h2>
        <p>Este es el contenido del segundo artículo.</p>
        <footer>Publicado por María el 2 de enero de 2024</footer>
      </article>
    </section>
  </body>
</html>
```

Aquí, cada `<article>` representa un artículo independiente con su propio contenido y pie de página.
`<footer>`

La etiqueta `<footer>` se utiliza para definir el pie de página de un documento o una sección. Suele contener información como el autor del documento, enlaces a términos de uso, contacto, y más.

```html title="HTML"
<!DOCTYPE html>
<html>
  <head>
    <title>Página de Ejemplo</title>
  </head>
  <body>
    <header>
      <h1>Bienvenido a Mi Sitio Web</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Sobre Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
    <section id="inicio">
      <h2>Inicio</h2>
      <p>Bienvenidos a nuestro sitio web.</p>
    </section>
    <section id="sobre">
      <h2>Sobre Nosotros</h2>
      <p>Somos una empresa dedicada a ...</p>
    </section>
    <section id="contacto">
      <h2>Contacto</h2>
      <p>Puede contactarnos a través de ...</p>
    </section>
    <footer>
      <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
      <nav>
        <ul>
          <li><a href="#privacidad">Política de Privacidad</a></li>
          <li><a href="#terminos">Términos de Uso</a></li>
        </ul>
      </nav>
    </footer>
  </body>
</html>
```

En este ejemplo, el `<footer>` contiene un mensaje de derechos de autor y un menú de navegación con enlaces a la política de privacidad y los términos de uso.

## Conclusión

El uso de etiquetas semánticas como `<header>`, `<nav>`, `<section>`, `<article>`, y `<footer>` en HTML5 mejora la accesibilidad y la comprensión del contenido tanto para los usuarios como para los motores de búsqueda. Estas etiquetas proporcionan una estructura clara y significativa al documento, permitiendo a los desarrolladores y navegadores interpretar mejor el contenido y su propósito.

Al estructurar correctamente tu HTML con estas etiquetas, no solo haces que tu código sea más legible y mantenible, sino que también mejoras la experiencia del usuario y la optimización para motores de búsqueda (SEO). Recuerda que la semántica importa, y el uso adecuado de estas etiquetas puede hacer una gran diferencia en la calidad y efectividad de tu sitio web.

¡Disfruta construyendo y estilizando tu página web! Si tienes alguna pregunta o necesitas más ayuda, ¡no dudes en preguntar!
