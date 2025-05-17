---
sidebar_position: 9
---

# Ejercicio de JavaScript 9

Creando una Función Sencilla

## Objetivo

Aprender a definir y llamar una función básica en JavaScript.

### Actividad

1. Crea una función llamada `saludar` que tome un parámetro llamado `nombre`.
2. Dentro de la función, muestra un mensaje en la consola que diga "Hola, [nombre]!" (reemplaza `[nombre]` con el valor del parámetro).
3. Llama a la función `saludar` y pasa tu nombre como argumento.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Creando una Función Sencilla</title>
  </head>
  <body>
    <h1>Ejercicio 9: Creando una Función Sencilla</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Definir la función
function saludar(nombre) {
  console.log("Hola, " + nombre + "!");
}

// Llamar a la función con un argumento
saludar("Carlos");
```
