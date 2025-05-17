---
sidebar_position: 3
---

# Ejercicio de JavaScript 3

Saludando con Variables

## Objetivo

Aprender a declarar variables en JavaScript y usarlas para almacenar y mostrar información en la consola.

### Actividad

1. Declara una variable llamada nombre y asigna tu nombre a esta variable.
2. Utiliza console.log() para mostrar un saludo en la consola, incluyendo el valor de la variable nombre.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Saludando con Variables</title>
  </head>
  <body>
    <h1>Ejercicio 3: Saludando con Variables</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Declaración de la variable y asignación de valor
let nombre = "Ana";

// Muestra el saludo en la consola
console.log("¡Hola, " + nombre + "! Bienvenido a la programación.");
```
