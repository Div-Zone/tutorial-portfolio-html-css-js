---
sidebar_position: 5
---

# Diseño de Cajas: Márgenes, Bordes y Rellenos

El modelo de caja de CSS es fundamental para el diseño de páginas web. Cada elemento de la página es una caja que consta de márgenes, bordes, rellenos y el contenido en sí.

## Márgenes (Margins)

Los márgenes son el espacio exterior alrededor de un elemento. Pueden ser definidos para cada lado del elemento (superior, derecho, inferior, izquierdo).

**margin:** Define el margen para todos los lados.

```css title="CSS"
p {
  /* Aplica a los cuatro lados */
  margin: 1em;
  margin: -3px;

  /* arriba y abajo | izquierda y derecha */
  margin: 5% auto;

  /* arriba | izquierda y derecha | abajo */
  margin: 1em auto 2em;

  /* arriba | derecha | abajo | izquierda */
  margin: 2px 1em 0 auto;
}
```

## Bordes (Borders)

Los bordes rodean el contenido y el relleno de un elemento.

**border:** Define el estilo, el grosor y el color del borde.

```css title="CSS"
div {
  /* estilo */
  border: solid;

  /* ancho | estilo */
  border: 2px dotted;

  /* estilo | color */
  border: outset #f33;

  /* ancho | estilo | color */
  border: medium dashed green;
}
```

**border-radius:** Define los bordes redondeados.

```css title="CSS"
div {
  /* La sintaxis del primer radio permite uno a cuatro valores */
  /* El radio se establece para los 4 lados */
  border-radius: 10px;

  /* esquina-superior-izquierda-y-esquina-inferior-derecha | esquina-superior-derecha-y-esquina-inferior-izquierda */
  border-radius: 10px 5%;

  /* esquina-superior-izquierda | esquina-superior-derecha-y-esquina-inferior-izquierda | esquina-inferior-derecha */
  border-radius: 2px 4px 2px;

  /* esquina-superior-izquierda | esquina-superior-derecha | esquina-inferior-derecha | esquina-inferior-izquierda */
  border-radius: 1px 0 3px 4px;

  /* La sintaxis del segundo radio permite uno a cuatro valores */
  /* (valores del primer radio) / radio */
  border-radius: 10px / 20px;

  /* (valores del primer radio) / esquina-superior-izquierda-y-esquina-inferior-derecha | esquina-superior-derecha-y-esquina-inferior-izquierda */
  border-radius: 10px 5% / 20px 30px;

  /* (valores del primer radio) / esquina-superior-izquierda | esquina-superior-derecha-y-esquina-inferior-izquierda | esquina-inferior-derecha */
  border-radius: 10px 5px 2em / 20px 25px 30%;

  /* (valores del primer radio) / esquina-superior-izquierda | esquina-superior-derecha | esquina-inferior-derecha | esquina-inferior-izquierda */
  border-radius: 10px 5% / 20px 25em 30px 35em;
}
```

## Rellenos (Padding)

Los rellenos son el espacio interior dentro de un elemento, entre el contenido y el borde.

**padding:** Define el relleno para todos los lados.

```css title="CSS"
p {
  padding: 10px;
}
```

**padding-top, padding-right, padding-bottom, padding-left:** Definen los rellenos individualmente.

```css title="CSS"
p {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

```css title="CSS" title="CSS"

```
