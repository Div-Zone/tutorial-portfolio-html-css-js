---
sidebar_position: 21
---

# Ejercicio de JavaScript 21

Sumar números pares en un rango

## Objetivo

Aprender a utilizar el bucle `for` para sumar números pares dentro de un rango especificado.

### Actividad

1. Pide al usuario que ingrese un número que represente el final de un rango (por ejemplo, 10 para obtener los números pares entre 1 y 10).
2. Usa un bucle `for` para iterar desde 1 hasta el número ingresado.
3. En cada iteración, verifica si el número actual es par.
4. Si es par, súmalo a una variable que almacene el total.
5. Al finalizar el bucle, muestra la suma de todos los números pares encontrados en el rango.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sumar números pares en un rango</title>
  </head>
  <body>
    <h1>Ejercicio 21: Sumar números pares en un rango</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
let numeroFinal = parseInt(prompt("Ingresa un número final para el rango:"));
let sumaPares = 0;

for (let i = 1; i <= numeroFinal; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}

console.log(
  `La suma de todos los números pares entre 1 y ${numeroFinal} es: ${sumaPares}`
);
```
