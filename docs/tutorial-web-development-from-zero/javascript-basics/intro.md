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

## Dónde escribir JavaScript

### La etiqueta `<script>`

En HTML, el código JavaScript se inserta entre las etiquetas `<script>` y `</script>`.

```javascript title="JS"
<script>
  document.getElementById("demo").innerHTML = "Mi primer JavaScript";
</script>
```

## Funciones y eventos de JavaScript

Una función de JavaScript es un bloque de código JavaScript que se puede ejecutar cuando se "llama".

Por ejemplo, se puede llamar a una función cuando ocurre un evento, como cuando el usuario hace clic en un botón.

Aprenderá mucho más sobre funciones y eventos en capítulos posteriores.

## JavaScript en `<head>` o `<body>`

Puede colocar cualquier cantidad de scripts en un documento HTML.

Los scripts se pueden colocar en la sección `<body>`, o en el `<head>` de una página HTML, o en ambas.

## JavaScript en `<head>`

En este ejemplo, se coloca una función de JavaScript en la sección `<head>` de una página HTML.

La función se invoca (llama) cuando se hace clic en un botón.

## Ejemplo

```html title="HTML"
<!DOCTYPE html>
<html>
  <head>
    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </head>
  <body>
    <h2>Demo JavaScript in Head</h2>

    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myFunction()">Try it</button>
  </body>
</html>
```

## JavaScript en `<body>`

En este ejemplo, se coloca una función de JavaScript en la sección `<body>` de una página HTML.

La función se invoca (llama) cuando se hace clic en un botón.

## Ejemplo

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h2>Demo JavaScript in Body</h2>

    <p id="demo">A Paragraph</p>

    <button type="button" onclick="myFunction()">Try it</button>

    <script>
      function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }
    </script>
  </body>
</html>
```

:::tip NOTA
Placing scripts at the bottom of the `<body>` element improves the display speed, because script interpretation slows down the display.
:::

## JavaScript externo

Los scripts también se pueden colocar en archivos externos.
Los archivos JavaScript tienen la extensión de archivo .js.

## Ejemplo

```javascript title="myScript.js"
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```

Los scripts externos son prácticos cuando se utiliza el mismo código en muchas páginas web diferentes.

Para utilizar un script externo, coloque el nombre del archivo del script en el atributo src (fuente) de una etiqueta `<script>`.

## Ejemplo

```javascript title="JS"
<script src="myScript.js"></script>
```

Puede colocar una referencia de script externa en `<head>` o `<body>` como desee.

El script se comportará como si estuviera ubicado exactamente donde se encuentra la etiqueta `<script>`.

:::tip NOTA
Los scripts externos no pueden contener etiquetas `<script>`.
:::

## External JavaScript Advantages

Placing scripts in external files has some advantages:

- It separates HTML and code
- It makes HTML and JavaScript easier to read and maintain
- Cached JavaScript files can speed up page loads

Para agregar varios archivos de script a una página, utilice varias etiquetas de script.

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h2>Demo external JavaScript</h2>

    <p id="demo">A Paragraph</p>

    <button type="button" onclick="myFunction()">Try it</button>

    <script src="myScript1.js"></script>
    <script src="myScript2.js"></script>
  </body>
</html>
```

## Referencias externas

Se puede hacer referencia a un script externo de 3 maneras diferentes:

- Con una URL completa (una dirección web completa)
- Con una ruta de archivo (como /js/)
- sin ningún camino

Este ejemplo utiliza una URL completa para vincular a myScript.js:

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h2>Demo external JavaScript</h2>

    <p id="demo">A Paragraph</p>

    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
  </body>
</html>
```

Este ejemplo utiliza una ruta de archivo para vincular a myScript.js:

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h2>Demo external JavaScript</h2>

    <p id="demo">A Paragraph</p>

    <script src="/js/myScript.js"></script>
  </body>
</html>
```

Este ejemplo no utiliza ninguna ruta para vincular a myScript.js:

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h2>Demo external JavaScript</h2>

    <p id="demo">A Paragraph</p>

    <script src="myScript.js"></script>
  </body>
</html>
```

## Salida de JavaScript

Posibilidades de visualización de JavaScript

JavaScript puede "mostrar" datos de diferentes maneras:

- Escribir en un elemento HTML, usando `InnerHTML`.
- Escribir en la salida HTML usando `document.write()`.
- Escribir en un cuadro de alerta, usando `window.alert()`.
- Escribiendo en la consola del navegador, usando `console.log()`.

## Usando HTML interno: innerHTML

Para acceder a un elemento HTML, JavaScript puede utilizar el método `document.getElementById(id)`.

El atributo `id` define el elemento HTML. La propiedad `internalHTML` define el contenido HTML:

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My First Paragraph</p>

    <p id="demo"></p>

    <script>
      document.getElementById("demo").innerHTML = 5 + 6;
    </script>
  </body>
</html>
```

## Using document.write()

Para fines de prueba, es conveniente utilizar `document.write()`:

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <script>
      document.write(5 + 6);
    </script>
  </body>
</html>
```

## Usando window.alert()

Puede utilizar un cuadro de alerta para mostrar datos:

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <script>
      window.alert(5 + 6);
    </script>
  </body>
</html>
```

## Puede omitir la palabra clave de `window`.

En JavaScript, el objeto de ventana es el objeto de alcance global. Esto significa que las variables, propiedades y métodos pertenecen por defecto al objeto de ventana. Esto también significa que especificar la palabra clave `window` es opcional:

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>

    <script>
      alert(5 + 6);
    </script>
  </body>
</html>
```

## Usando `console.log()`

Para fines de depuración, puede llamar al método `console.log()` en el navegador para mostrar datos.

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <script>
      console.log(5 + 6);
    </script>
  </body>
</html>
```

## JavaScript Imprimir

JavaScript no tiene ningún objeto de impresión ni métodos de impresión.

No puede acceder a los dispositivos de salida desde JavaScript.

La única excepción es que puede llamar al método `window.print()` en el navegador para imprimir el contenido de la ventana actual.

```html title="HTML"
<!DOCTYPE html>
<html>
  <body>
    <button onclick="window.print()">Print this page</button>
  </body>
</html>
```

## Comentarios de JavaScript

Los comentarios de JavaScript se pueden utilizar para explicar el código JavaScript y hacerlo más legible.

Los comentarios de JavaScript también se pueden utilizar para evitar la ejecución al probar código alternativo.

### Comentarios de una sola línea

Los comentarios de una sola línea comienzan con `//`.

JavaScript ignorará cualquier texto entre `//` y el final de la línea (no se ejecutará).

### Comentarios de varias líneas

Los comentarios de varias líneas comienzan con `/*` y terminan con `*/`.

JavaScript ignorará cualquier texto entre `/*` y `*/`.

Este ejemplo utiliza un comentario de una sola línea y de varias líneas (un bloque de comentarios) para explicar el código:

```javascript title="JS"
// Change heading:
document.getElementById("myH").innerHTML = "My First Page";

// Change paragraph:
document.getElementById("myP").innerHTML = "My first paragraph.";

/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/
document.getElementById("myH").innerHTML = "My First Page";
document.getElementById("myP").innerHTML = "My first paragraph.";
```
