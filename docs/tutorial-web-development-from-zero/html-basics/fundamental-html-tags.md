---
sidebar_position: 2
---

# Elementos HTML fundamentales

## Elementos y etiquetas comunes

Encabezados: Se utilizan para títulos y subtítulos. Van desde `<h1>` (el más importante) hasta `<h6>` (el menos importante).

```html title="html"
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
```

Párrafos: Se crean con la etiqueta `<p>`.

```html title="html"
<p>Este es un párrafo de texto.</p>
```

La etiqueta `<span>` es un contenedor en línea que se utiliza para textos especiales, para envolver una parte de un texto o una parte de un documento.

```html title="html"
<p>Este es un <span style="color:blue">ejemplo</span> de etiqueta span.</p>
```

Enlaces: Se crean con la etiqueta `<a>` y se utilizan para navegar entre páginas.

```html title="html"
<a href="https://www.ejemplo.com">Visita Ejemplo</a>
```

Imágenes: Se insertan con la etiqueta `<img>`.

```html title="html"
<img src="imagen.jpg" alt="Descripción de la imagen" />
```

## Atributos

Los atributos proporcionan información adicional sobre los elementos. Se colocan dentro de la etiqueta de apertura.

href: Usado en la etiqueta `<a>` para definir la URL del enlace.

```html title="html"
<a href="https://www.ejemplo.com">Visita Ejemplo</a>
```

src: Usado en la etiqueta `<img>` para definir la ruta de la imagen.

```html title="html"
<img src="imagen.jpg" alt="Descripción de la imagen" />
```

alt: Proporciona texto alternativo para las imágenes, importante para la accesibilidad.

```html title="html"
<img src="imagen.jpg" alt="Descripción de la imagen" />
```

## Ejercicio práctico

Crea un documento HTML sencillo con un título, un párrafo, un enlace y una imagen. Aquí tienes un ejemplo básico:

```html title="html"
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página web</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es mi primer documento HTML.</p>
    <a href="https://www.ejemplo.com">Visita Ejemplo</a>
    <br />
    <img src="imagen.jpg" alt="Descripción de la imagen" />
  </body>
</html>
```
