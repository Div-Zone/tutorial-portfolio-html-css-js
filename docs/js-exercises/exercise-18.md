---
sidebar_position: 18
---

# Ejercicio de JavaScript 18

Identificación de Vocales con `switch`

## Objetivo

Practicar el uso de `switch` para identificar si un carácter es una vocal.

### Actividad

1. Pide al usuario que ingrese una letra.
2. Usa `switch` para verificar si la letra ingresada es una vocal (`a`, `e`, `i`, `o`, `u`, en minúsculas y mayúsculas).
3. Muestra en la consola un mensaje que indique si la letra es una vocal o no.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Identificación de Vocales con switch</title>
  </head>
  <body>
    <h1>Ejercicio 18: Identificación de Vocales con switch</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
let letra = prompt("Ingresa una letra:");

switch (letra.toLowerCase()) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Es una vocal.");
    break;
  default:
    console.log("No es una vocal.");
}
```
