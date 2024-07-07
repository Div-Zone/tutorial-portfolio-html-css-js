---
sidebar_position: 1
---

# Introducción a JavaScript

**JavaScript** es el lenguaje de programación más popular y ampliamente utilizado en el mundo, conocido por su versatilidad y poder en el desarrollo web. Desde su creación, ha sido el motor principal detrás de la interactividad y dinamismo de las páginas web.

JavaScript es el lenguaje de programación de la Web, lo que significa que se ejecuta en los navegadores, permitiendo a los desarrolladores crear experiencias de usuario ricas y funcionales. **Con JavaScript, puedes manipular el DOM (Document Object Model) para actualizar el contenido de la página, responder a eventos del usuario, validar formularios, animar elementos, y mucho más, sin necesidad de recargar la página**.

Una de las grandes ventajas de JavaScript es su **facilidad de aprendizaje**. Su sintaxis es intuitiva y accesible para principiantes, permitiendo que los nuevos desarrolladores comiencen a escribir código funcional rápidamente. Además, hay una **gran cantidad de recursos, comunidades y herramientas disponibles** para aprender y perfeccionar tus habilidades en JavaScript.

Este tutorial está diseñado para llevarte desde los conceptos básicos hasta las técnicas avanzadas de JavaScript. Comenzarás aprendiendo los **fundamentos del lenguaje, incluyendo variables, tipos de datos, y estructuras de control**. A medida que avances, explorarás temas más complejos como **funciones, objetos, y manipulación del DOM**. Finalmente, te adentrarás en conceptos avanzados como **asincronía, promesas, y las modernas APIs del navegador**.
:::tip NOTA
A lo largo de este tutorial, trabajarás en ejemplos prácticos y proyectos que te ayudarán a consolidar tus conocimientos y desarrollar habilidades aplicables en el mundo real. ¡Prepárate para descubrir el potencial de JavaScript y transformar la manera en que interactúas con la web!
:::

## JavaScript puede cambiar el contenido HTML

Uno de los métodos más utilizados en JavaScript para interactuar con el DOM (Document Object Model) es `getElementById()`. Este método permite seleccionar un elemento HTML específico mediante su atributo id.

En el siguiente ejemplo, utilizamos `getElementById()` para "encontrar" un elemento HTML con el `id="demo"`. Una vez seleccionado, cambiamos el contenido del elemento modificando su propiedad `innerHTML`, estableciéndola en "Hola JavaScript":

## Ejemplo

```html title="HTML"
<!DOCTYPE html>
<html>
  <head>
    <title>Ejemplo de getElementById()</title>
  </head>
  <body>
    <p id="demo">Este es un párrafo.</p>
    <script>
      document.getElementById("demo").innerHTML = "Hola JavaScript";
    </script>
  </body>
</html>
```

## JavaScript puede cambiar los valores de los atributos HTML

En este ejemplo, JavaScript cambia el valor del atributo `src` (fuente) de una etiqueta `<img>`:

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h1>JavaScript puede cambiar los valores de los atributos HTML.</h1>

    <button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">
      Enciende la luz
    </button>

    <img id="myImage" src="pic_bulboff.gif" style="width:100px" />

    <button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">
      Apaga la luz
    </button>
  </body>
</html>
```

## JavaScript puede cambiar los estilos HTML (CSS)

JavaScript no solo puede modificar el contenido de los elementos HTML, sino que también tiene la capacidad de **alterar sus estilos CSS dinámicamente**. Esto permite a los desarrolladores cambiar la apariencia de una página web en respuesta a eventos o acciones del usuario, mejorando significativamente la interactividad y la experiencia del usuario.

Modificar el estilo de un elemento HTML con JavaScript es similar a cambiar un atributo HTML. Puedes acceder a las propiedades de estilo de un elemento y asignarles nuevos valores.

## Ejemplo

En el siguiente ejemplo, utilizamos JavaScript para cambiar el tamaño de la fuente de un elemento HTML con el `id="demo"` a 35 píxeles:

```html title="HTML"
<!DOCTYPE html>
<html>
  <head>
    <title>Cambiar Estilos con JavaScript</title>
  </head>
  <body>
    <p id="demo">Este es un párrafo.</p>
    <script>
      document.getElementById("demo").style.fontSize = "35px";
    </script>
  </body>
</html>
```

:::tip
En este código:

    `document.getElementById("demo")` selecciona el elemento `<p>` con el `id="demo".
    .style.fontSize = "35px"` cambia la propiedad CSS fontSize del elemento seleccionado, ajustando el tamaño de la fuente a 35 píxeles.

:::
