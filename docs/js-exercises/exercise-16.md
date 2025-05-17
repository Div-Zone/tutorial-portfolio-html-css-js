---
sidebar_position: 16
---

# Ejercicio de JavaScript 16

Calculadora Sencilla con `if/else`

## Objetivo

Practicar cómo usar `if/else` para realizar operaciones matemáticas básicas según la elección del usuario.

### Actividad

1. Pide al usuario que ingrese dos números y una operación (`+`, `-`, `*`, `/`).
2. Usa `if/else` para realizar la operación correcta:

   Suma si elige `+`
   Resta si elige `-`
   Multiplicación si elige `*`
   División si elige `/`

3. Muestra el resultado en la consola.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculadora Sencilla con if/else</title>
  </head>
  <body>
    <h1>Ejercicio 16: Calculadora Sencilla con if/else</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Ingresa la operación (+, -, *, /):");

if (operacion === "+") {
  console.log("Resultado:", numero1 + numero2);
} else if (operacion === "-") {
  console.log("Resultado:", numero1 - numero2);
} else if (operacion === "*") {
  console.log("Resultado:", numero1 * numero2);
} else if (operacion === "/") {
  console.log("Resultado:", numero1 / numero2);
} else {
  console.log("Operación no válida.");
}
```
