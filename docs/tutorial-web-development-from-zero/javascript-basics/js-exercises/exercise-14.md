---
sidebar_position: 14
---

# Ejercicio de JavaScript 14

Función que calcula el precio total con Impuesto

## Objetivo

Aprender a trabajar con funciones que tomen un objeto como parámetro y devolver valores calculados.

### Actividad

1. Crea un objeto llamado `producto` que tenga las siguientes propiedades:

- `nombre` con el valor de cualquier producto.
- `precio` con el valor numérico del precio del producto.

2. Crea una función flecha llamada `calcularPrecioConImpuesto` que tome el objeto `producto` como parámetro y un segundo parámetro llamado `impuesto` (que represente el porcentaje de impuesto).
3. Dentro de la función, calcula el precio total incluyendo el impuesto usando la fórmula `precio + (precio * impuesto / 100)`.
4. La función debe devolver el precio total con el impuesto.
5. Llama a la función con `producto` y un impuesto de, por ejemplo, `15`, y guarda el resultado en una variable llamada `precioFinal`.
6. Muestra `precioFinal` en la consola.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Función que calcula el precio total con Impuesto</title>
  </head>
  <body>
    <h1>Ejercicio 14: Función que calcula el precio total con Impuesto</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Crear el objeto producto
const producto = {
  nombre: "Televisor",
  precio: 300,
};

// Definir la función flecha para calcular el precio con impuesto
const calcularPrecioConImpuesto = (producto, impuesto) =>
  producto.precio + (producto.precio * impuesto) / 100;

// Llamar a la función y guardar el resultado en una variable
let precioFinal = calcularPrecioConImpuesto(producto, 15);

// Mostrar el precio final
console.log("El precio final con impuesto es: $" + precioFinal);
```
