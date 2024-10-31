---
sidebar_position: 7
---

# Ejercicio de JavaScript 7

Calculando el Precio Total con IVA

## Objetivo

Practicar el uso de operadores aritméticos y entender cómo calcular porcentajes en JavaScript.

### Actividad

1. Declara una variable llamada precio y asígnale un valor numérico, representando el precio de un producto.
2. Declara una variable llamada `iva` con el valor `0.21`, que representa el 21% de IVA.
3. Calcula el precio total sumando el precio inicial y el valor de IVA (multiplica el `precio` por `iv`a y súmalo a `precio`), y guarda el resultado en una variable llamada precioTotal.
4. Muestra el `precioTotal` en la consola.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculando el Precio Total con IVA</title>
  </head>
  <body>
    <h1>Ejercicio 7: Calculando el Precio Total con IVA</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Declaración de variables
let precio = 100; // Precio del producto
let iva = 0.21; // IVA del 21%

// Cálculo del precio total con IVA
let precioTotal = precio + precio * iva;

// Muestra el precio total en la consola
console.log("El precio total con IVA es: $" + precioTotal);
```
