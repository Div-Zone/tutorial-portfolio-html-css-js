---
sidebar_position: 4
---

# Estilización de Texto, Colores y Fondos

## Estilización de Texto

CSS ofrece una variedad de propiedades para estilizar texto:

**font-family:** Define la familia de fuentes.

```css title="CSS"
p {
  font-family: Arial, sans-serif;
}
```

**font-weight:** Define el grosor del texto.

```css title="CSS"
p {
  font-weight: bold;
}
```

**text-align:** Define la alineación del texto.

```css title="CSS"
h1 {
  text-align: center;
}
```

**text-decoration:** Define decoraciones como subrayado, tachado, etc.

```css title="CSS"
a {
  text-decoration: none;
}
```

## Colores

CSS permite definir colores de diversas maneras:

**Nombres de Color:**

```css title="CSS"
p {
  color: blue;
}
```

**Valores Hexadecimales:**

Los números **hexadecimales** son números representados en base 16 , que significa los dígitos **0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F** en lugar de solamente **0-9**.

Un color hexadecimal se especifica con: `#RRGGBB`, donde los enteros hexadecimales **RR (rojo)**, **GG (verde**) y **BB (azul)** especifican los componentes del color.

Por ejemplo, `#ff0000` se muestra en rojo, porque el rojo está configurado en su valor más alto (ff) y los demás están configurados en el valor más bajo (00).

Para mostrar negro, establezca todos los valores en 00: `#000000`.

Para mostrar el blanco, establezca todos los valores en ff: `#ffffff`.

```css title="CSS"
p {
  color: #0000ff;
}
```

**Valores RGB:**

En CSS, un color se puede especificar como un valor RGB mediante esta fórmula: `rgb (rojo, verde, azul)`.

Cada parámetro **(rojo, verde y azul)** define la intensidad del color entre **0 y 255**.

Por ejemplo, **rgb(255, 0, 0)** se muestra en rojo, porque el rojo está configurado en su valor más alto (255) y los demás están configurados en 0.

Para mostrar negro, establezca todos los parámetros de color en 0, así: **rgb(0, 0, 0)**.

Para mostrar el blanco, configure todos los parámetros de color en 255: **rgb(255, 255, 255)**.

```css title="CSS"
p {
  color: rgb(0, 0, 255);
}
```

**Valores RGBA (con opacidad):**

```css title="CSS"
p {
  color: rgba(0, 0, 255, 0.5);
}
```

## Fondos

Las propiedades de fondo permiten personalizar el aspecto de los fondos de los elementos:

**background-color:** Define el color de fondo.

```css title="CSS"
div {
  background-color: #f0f0f0;
}
```

**background-image:** Define una imagen de fondo.

```css title="CSS"
div {
  background-image: url("imagen.jpg");
}
```

**background-repeat:** Define si la imagen de fondo se repite.

```css title="CSS"
div {
  background-repeat: no-repeat;
}
```

**background-size:** Define el tamaño de la imagen de fondo.

```css title="CSS"
/* Valores de palabras clave */
background-size: cover;
background-size: contain;

/* Sintaxis de un valor */
/* El ancho de la imagen (la altura 'height' se vuelve 'automática') */
background-size: 50%;
background-size: 3.2em;
background-size: 12px;
background-size: auto;

/* Sintaxis de dos valores */
/* primer valor: ancho de la imagen, segundo valor: alto */
background-size: 50% auto;
background-size: 3em 25%;
background-size: auto 6px;
background-size: auto auto;
```
