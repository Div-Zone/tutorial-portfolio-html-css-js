---
sidebar_position: 15
---

# Ejercicio de JavaScript 15

Clasificación de Edad

## Objetivo

Practicar la estructura de control `if/else` para tomar decisiones según la edad ingresada.

### Actividad

1. Pide al usuario que ingrese su edad.
2. Usa `if/else` para clasificar la edad en las siguientes categorías:

- Menor de 13 años: "Niño"
- Entre 13 y 18 años: "Adolescente"
- Mayor de 18 años: "Adulto"

3. Muestra en la consola la categoría de edad correspondiente.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clasificación de Edad</title>
  </head>
  <body>
    <h1>Ejercicio 15: Clasificación de Edad</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
let edad = prompt("Ingresa tu edad:");

if (edad < 13) {
  console.log("Niño");
} else if (edad <= 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}
```
