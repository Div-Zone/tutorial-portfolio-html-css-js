---
sidebar_position: 10
---

# Ejercicio de JavaScript 10

Creando un Objeto de Persona

## Objetivo

Aprender a crear un objeto básico y acceder a sus propiedades.

### Actividad

1. Crea un objeto llamado `persona` con las siguientes propiedades:

- `nombre` con un valor de tu nombre.
- `edad` con un valor de tu edad.
- `esEstudiante` con un valor booleano (por ejemplo, `true` o `false`).

2. Muestra cada propiedad en la consola usando `console.log`.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Creando un Objeto de Persona</title>
  </head>
  <body>
    <h1>Ejercicio 10: Creando un Objeto de Persona</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Crear el objeto persona
let persona = {
  nombre: "Carlos",
  edad: 25,
  esEstudiante: true,
};

// Acceder y mostrar cada propiedad del objeto
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Es estudiante: " + persona.esEstudiante);
```
