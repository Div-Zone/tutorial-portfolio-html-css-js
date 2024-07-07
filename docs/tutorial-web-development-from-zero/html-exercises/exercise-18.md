---
sidebar_position: 18
---

# Ejercicio práctico HTML 18

## Objetivo

Enlaces Absolutos y Relativos

### Actividad

Crea un documento HTML que contenga enlaces absolutos y relativos.

### Solución

```html title="index.html"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Enlaces Absolutos y Relativos</title>
  </head>
  <body>
    <h2>Enlace Absoluto</h2>
    <a href="https://www.google.com" target="_blank">Ir a Google</a>

    <h2>Enlace Relativo</h2>
    <a href="page.html">Ir a Página Interna</a>
  </body>
</html>
```

Dentro de la misma carpeta, crea otro archivo para utilizar como página interna.

```html title="page.html"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Enlaces Absolutos y Relativos - Página interna</title>
  </head>
  <body>
    <h1>Mi página interna de ejemplo.</h1>
  </body>
</html>
```
