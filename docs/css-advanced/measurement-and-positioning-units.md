---
sidebar_position: 2
---

# Uso de unidades de medida y posicionamiento.

En el desarrollo web, el manejo preciso de unidades de medida y técnicas de posicionamiento en CSS es esencial para crear interfaces web responsivas y bien diseñadas. Este artículo explorará los distintos tipos de unidades de medida y los métodos avanzados de posicionamiento que puedes usar para perfeccionar tus diseños web.

## Unidades de Medida en CSS

Las unidades de medida en CSS determinan cómo se dimensionan y posicionan los elementos en una página web. Existen varias unidades, cada una con sus propios casos de uso.

### Unidades Absolutas

Las unidades absolutas tienen un tamaño fijo que no se adapta al contexto del diseño. Son útiles cuando necesitas un control exacto sobre el tamaño de los elementos.

**px (píxeles):** Una de las unidades más comunes. Un píxel es un punto en la pantalla del dispositivo.

```css title="CSS"
.box {
  width: 200px;
  height: 100px;
}
```

**Puntos (pt):** Comúnmente utilizados en la impresión, representan 1/72 de pulgada.

```css title="CSS"
.print-text {
  font-size: 12pt;
}
```

**cm (centímetros), mm (milímetros):** Rara vez se usan en la web, pero son útiles para el diseño de impresión.

```css title="CSS"
.print-box {
  width: 10cm;
  height: 5cm;
}
```

**in (pulgadas):** También útil principalmente para diseños de impresión.

```css title="CSS"
.print-area {
  width: 3in;
  height: 2in;
}
```

## Unidades Relativas

Las unidades relativas se adaptan al entorno del diseño, haciendo que sean ideales para diseños responsivos.

**% (porcentaje):** Los porcentajes se utilizan en relación con el tamaño del contenedor padre.

```css title="CSS"
.container {
  width: 80%; /* 80% del ancho del contenedor padre */
}
```

**Unidades de Vista:** (vw, vh, vmin, vmax)

- vw: 1% del ancho de la ventana de visualización.
- vh: 1% de la altura de la ventana de visualización.
- vmin: El menor valor entre vw y vh.
- vmax: El mayor valor entre vw y vh.

```css title="CSS"
.full-screen {
  width: 100vw; /* 100% del ancho de la ventana de visualización */
  height: 100vh; /* 100% de la altura de la ventana de visualización */
}
```

**Em (em):** Se basa en el tamaño de la fuente del elemento padre.

```css title="CSS"
.text {
  font-size: 2em; /* 2 veces el tamaño de la fuente del elemento padre */
}
```

**Rem (rem):** Se basa en el tamaño de la fuente de la raíz del documento (`<html>`).

```css title="CSS"
html {
  font-size: 16px;
}
.text {
  font-size: 1.5rem; /* 1.5 veces el tamaño de la fuente del elemento raíz */
}
```
