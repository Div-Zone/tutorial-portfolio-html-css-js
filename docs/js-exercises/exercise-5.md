---
sidebar_position: 5
---

# Ejercicio de JavaScript 5

Concatenando Información Personal

## Objetivo

Practicar la combinación de variables y mostrar un mensaje completo en la consola.

### Actividad

1. Declara tres variables llamadas nombre, ciudad, y hobby.
2. Asigna a cada variable un valor representando tu nombre, la ciudad en la que vives y un pasatiempo que te guste.
3. Crea una variable llamada mensaje que combine las tres variables en una frase completa.
4. Muestra el mensaje en la consola.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Concatenando Información Personal</title>
  </head>
  <body>
    <h1>Ejercicio 5: Concatenando Información Personal</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Declaración de variables
let nombre = "Ana";
let ciudad = "Buenos Aires";
let hobby = "leer libros";

// Creación del mensaje combinando las variables
let mensaje =
  "Hola, soy " + nombre + ", vivo en " + ciudad + " y me gusta " + hobby + ".";

// Muestra el mensaje en la consola
console.log(mensaje);
```
