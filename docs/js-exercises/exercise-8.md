---
sidebar_position: 8
---

# Ejercicio de JavaScript 8

Verificando Tipos de Datos

## Objetivo

Aprender a identificar tipos de datos en JavaScript usando el operador typeof.

### Actividad

1. Declara tres variables llamadas `edad`, `nombre`, y `esEstudiante`.
2. Asigna valores a las variables, usando un número para `edad`, un texto (string) para `nombre`, y un valor booleano (`true` o `false`) para `esEstudiante`.
3. Usa `console.log` para mostrar en la consola el tipo de cada variable usando `typeof`.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verificando Tipos de Datos</title>
  </head>
  <body>
    <h1>Ejercicio 8: Verificando Tipos de Datos</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Declaración de variables de diferentes tipos de datos
let edad = 25; // Número
let nombre = "Carlos"; // String (texto)
let esEstudiante = true; // Booleano

// Mostrar el tipo de cada variable en la consola
console.log("El tipo de 'edad' es: " + typeof edad); // number
console.log("El tipo de 'nombre' es: " + typeof nombre); // string
console.log("El tipo de 'esEstudiante' es: " + typeof esEstudiante); // boolean
```
