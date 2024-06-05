---
sidebar_position: 2
---

# Selectores CSS

CSS (Cascading Style Sheets) es el lenguaje utilizado para estilizar documentos HTML. A través de CSS, podemos aplicar estilos visuales a los elementos HTML, controlando su apariencia y presentación. En este artículo, exploraremos los selectores CSS y las propiedades básicas que son esenciales para cualquier desarrollador web.

## Selectores CSS

Los selectores CSS son patrones utilizados para seleccionar los elementos HTML a los que se aplicarán los estilos. Hay varios tipos de selectores que puedes utilizar:

### Selectores de Tipo

Los selectores de tipo aplican estilos a todas las etiquetas HTML de un tipo específico. Por ejemplo, para estilizar todos los párrafos `<p>`:

```css title="CSS"
p {
  color: blue;
}
```

## Selectores de Clase

Los selectores de clase aplican estilos a cualquier elemento que tenga una clase específica. Para definir una clase en HTML, utilizamos el atributo `class`.

```html title="HTML"
<p class="destacado">Este es un párrafo destacado.</p>
<p>Este es un párrafo normal.</p>
```

```css title="CSS"
.destacado {
  color: red;
  font-weight: bold;
}
```

## Selectores de ID

Los selectores de ID aplican estilos a un único elemento que tiene un ID específico. Para definir un ID en HTML, utilizamos el atributo `id`.

```html title="HTML"
<p id="unico">Este es un párrafo único.</p>
```

```css title="CSS"
#unico {
  color: green;
  font-size: 20px;
}
```

## Selectores de Atributo

Los selectores de atributo aplican estilos a los elementos que tienen un atributo específico.

```css title="CSS"
/* Elementos <a> con un atributo title */
a[title] {
  color: purple;
}

/* Elementos <a> con un href que coincida con "https://example.org" */
a[href="https://example.org"]
{
  color: green;
}

/* Elementos <a> con un href que contenga "example" */
a[href*="example"] {
  font-size: 2em;
}

/* Elementos <a> con un href que comience con "#" */
a[href^="#"] {
  color: #001978;
}

/* Elementos <a> con un href que termine en ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* Elementos <a> cuyo atributo class contenga la palabra "logo" */
a[class~="logo"] {
  padding: 2px;
}
```

## Selectores de Descendiente

Los selectores de descendiente aplican estilos a los elementos que son descendientes de un elemento específico.

```html title="HTML"
<div class="contenedor">
  <p>Texto dentro del contenedor.</p>
</div>
<p>Texto fuera del contenedor.</p>
```

```css title="CSS"
.contenedor p {
  color: purple;
}
```

## Selectores de grupo

Los selectores de grupo aplican los mismos estilos a múltiples selectores.

```css title="CSS"
h1,
h2,
h3 {
  color: navy;
}
```

## Selector universal

Selecciona todos los elementos.

```css title="CSS"
* {
  margin: 0;
  padding: 0;
}
```

## Propiedades Básicas de CSS

### Color

La propiedad `color` se utiliza para establecer el color del texto.

```css title="CSS"
p {
  color: black;
}
```

## Fondo (Background)

La propiedad `background-color` establece el color de fondo de un elemento.

```css title="CSS"
div {
  background-color: lightblue;
}
```

## Fuentes

**font-family:** Define la fuente del texto.

```css title="CSS"
p {
  font-family: Arial, sans-serif;
}
```

**font-size:** Define el tamaño de la fuente.

```css title="CSS"
h1 {
  font-size: 24px;
}
```

**font-weight:** Define el grosor de la fuente.

```css title="CSS"
strong {
  font-weight: bold;
}
```

## Texto

**text-align:** Alinea el texto horizontalmente.

```css title="CSS"
h2 {
  text-align: center;
}
```

**text-decoration:** Añade decoraciones al texto, como subrayado.

```css title="CSS"
a {
  text-decoration: none;
}
```

**text-transform:** Controla la capitalización del texto.

```css title="CSS"
p.uppercase {
  text-transform: uppercase;
}
```

## Márgenes y Rellenos

**margin:** Establece el espacio exterior alrededor de un elemento.

```css title="CSS"
div {
  margin: 20px;
}
```

**padding:** Establece el espacio interior dentro de un elemento.

```css title="CSS"
div {
  padding: 10px;
}
```

## Bordes

**border:** Define el borde de un elemento.

```css title="CSS"
p {
  border: 1px solid black;
}
```

**border-radius:** Define los bordes redondeados.

```css title="CSS"
img {
  border-radius: 50%;
}
```

## Dimensiones

**width:** Establece el ancho de un elemento.

```css title="CSS"
img {
  width: 100px;
}
```

**height:** Establece la altura de un elemento.

```css title="CSS"
img {
  height: 100px;
}
```

## Display y Visibilidad

**display:** Controla cómo se muestra un elemento.

```css title="CSS"
.block {
  display: block;
}

.inline {
  display: inline;
}

.none {
  display: none;
}
```

**visibility:** Controla si un elemento es visible o no.

```css title="CSS"
.invisible {
  visibility: hidden;
}
```

## Conclusión

Comprender los selectores CSS y las propiedades básicas es fundamental para cualquier desarrollador web. Los selectores te permiten aplicar estilos específicos a los elementos HTML, mientras que las propiedades te permiten controlar su apariencia y presentación. Con estos conocimientos básicos, estarás bien encaminado para crear diseños web atractivos y efectivos. ¡Sigue practicando y experimentando con CSS para descubrir todo lo que puedes lograr!
