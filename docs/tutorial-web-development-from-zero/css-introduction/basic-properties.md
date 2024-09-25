---
sidebar_position: 3
---

# Propiedades básicas

Las propiedades básicas de CSS definen cómo se debe presentar un elemento en una página web. Algunas de las más comunes son:

**color:** Define el color del texto.

```css
p {
  color: red;
}
```

**font-size:** Define el tamaño de la fuente.

```css
h1 {
  font-size: 32px;
}
```

**background-color:** Define el color de fondo de un elemento.

```css
div {
  background-color: lightgray;
}
```

**margin:** Define el espacio exterior alrededor de un elemento.

```css
p {
  margin: 20px;
}
```

**padding:** Define el espacio interior dentro de un elemento.

```css
div {
  padding: 15px;
}
```

**float:** La propiedad CSS flotante coloca un elemento en el lado izquierdo o derecho de su contenedor, lo que permite que el texto y los elementos en línea se ajusten a su alrededor. El elemento se elimina del flujo normal de la página, aunque sigue siendo parte del flujo (a diferencia del posicionamiento absoluto).

```css
div {
  /* Valores */
  float: left;
  float: right;
  float: none;
  float: inline-start;
  float: inline-end;

  /* Values Globales */
  float: inherit;
  float: initial;
  float: revert;
  float: revert-layer;
  float: unset;
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
