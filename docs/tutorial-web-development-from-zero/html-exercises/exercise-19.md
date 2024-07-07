---
sidebar_position: 19
---

# Ejercicio práctico HTML 19

## Objetivo

Iframe con Página Web Interna

### Actividad

Inserta una página HTML dentro de otra usando `<iframe>`.

### Solución

```html title="index.html"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Iframe</title>
  </head>
  <body>
    <h2>Página con Iframe</h2>
    <iframe src="page.html" width="600" height="400"></iframe>
  </body>
</html>
```

Dentro de la misma carpeta, crea otro archivo para utilizar como página interna.

```html title="page.html"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Iframe - Página interna</title>
  </head>
  <body>
    <h1>Mi página interna de ejemplo.</h1>
  </body>
</html>
```
