---
sidebar_position: 6
---

# Ejercicio de JavaScript 6

Sumando Números

## Objetivo

Aprender a usar operadores aritméticos y a trabajar con números.

### Actividad

1. Declara dos variables llamadas num1 y num2 y asígnales valores numéricos.
2. Usa el operador de suma (+) para sumar ambos números y guarda el resultado en una variable llamada resultado.
3. Muestra el resultado en la consola.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sumando Números</title>
  </head>
  <body>
    <h1>Ejercicio 6: Sumando Números</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Declaración de variables numéricas
let num1 = 10;
let num2 = 15;

// Sumar los números
let resultado = num1 + num2;

// Muestra el resultado en la consola
console.log("El resultado de la suma es: " + resultado);
```
