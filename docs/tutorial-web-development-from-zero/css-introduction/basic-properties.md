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
