---
sidebar_position: 1
---

# Introducción a la Estilización de Páginas Web con CSS

CSS (Cascading Style Sheets) es un lenguaje utilizado para describir la presentación de un documento escrito en HTML o XML. Mientras que HTML proporciona la estructura y el contenido de la página, CSS se encarga de la apariencia visual, permitiendo a los desarrolladores web crear sitios atractivos y estilizados. En este artículo, exploraremos los conceptos básicos de CSS, sus ventajas y algunas técnicas fundamentales para estilizar páginas web.

## ¿Qué es CSS?

CSS es un lenguaje de hojas de estilo en cascada que permite aplicar estilos a elementos HTML. Las "hojas de estilo" contienen reglas que especifican cómo se deben renderizar los elementos en la pantalla, en papel o en otros medios. La "cascada" se refiere a la forma en que las reglas de estilo se aplican y se combinan, permitiendo la herencia y la especificidad.

## ¿Por Qué es Importante CSS?

CSS es esencial porque:

- **Mejora la Apariencia:** Hace que las páginas web se vean bonitas y profesionales.

- **Separación de Contenido y Estilo:** Permite mantener el HTML limpio y organizado al separar el contenido del diseño.

- **Consistencia:** Facilita aplicar un estilo uniforme a varias páginas de un sitio web.

- **Mantenimiento:** Hace que sea más fácil cambiar el diseño de un sitio web sin tener que modificar el HTML.

## Conceptos Básicos de CSS

![Estructura del código CSS](./img/basic-css.png "Estructura del código CSS")

## Cómo Añadir CSS a Tu HTML

**Existen tres formas principales de añadir CSS a tu HTML:**

1. **CSS en Línea:** Usando el atributo `style` directamente en la etiqueta HTML.

```html title="HTML"
<p style="color: blue; font-size: 14px;">Este es un párrafo estilizado.</p>
```

2. **CSS Interno:** Usando una etiqueta `<style>` dentro del `<head>` del documento HTML.

```html title="HTML"
<head>
  <style>
    p {
      color: blue;
      font-size: 14px;
    }
  </style>
</head>
```

3. **CSS Externo:** Creando un archivo CSS separado y enlazándolo en el HTML.

```html title="HTML"
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

## Ejemplo Práctico

Supongamos que tienes los siguientes archivos:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>Mi Primera Página Estilizada</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Bienvenido a Mi Página Web</h1>
    <p>Esta es una introducción a CSS.</p>
    <div class="caja">
      <p>CSS es genial para estilizar páginas web.</p>
    </div>
  </body>
</html>
```

```css title="styles.css"
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  color: #666;
  font-size: 18px;
}

.caja {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 20px;
}
```

**En este ejemplo:**

- Se establece un color de fondo y una fuente para todo el body.

- Se estiliza el h1 para que tenga un color de texto específico y esté centrado.

- Se establece un color y tamaño de fuente para todos los p.

- Se crea una clase .caja que aplica estilos específicos a cualquier elemento con esta clase.

## Conclusión

CSS es una herramienta poderosa que te permite transformar el aspecto de tu sitio web. Desde cambiar colores y fuentes hasta diseñar un layout responsivo, CSS te ofrece la flexibilidad y el control necesarios para crear experiencias web atractivas y accesibles. Con esta introducción básica, ya tienes los conocimientos fundamentales para empezar a estilizar tus propias páginas web.
