---
sidebar_position: 26
---

# Ejercicio de JavaScript 26

Guardar y Recuperar Datos de Usuario en `localStorage`

## Objetivo

Aprender a guardar y recuperar objetos JSON en `localStorage`, utilizando los métodos `setItem` y `getItem`.

### Actividad

1. Crea un objeto llamado `usuario` con las propiedades `nombre`, `edad` y `email`.
2. Convierte este objeto a formato JSON usando `JSON.stringify()` y guárdalo en `localStorage`.
3. Recupera los datos de `localStorage` y conviértelos de nuevo a un objeto usando `JSON.parse()`.
4. Imprime en la consola el objeto original y el objeto recuperado para verificar que se haya guardado y recuperado correctamente.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Guardar y Recuperar Datos de Usuario en localStorage</title>
  </head>
  <body>
    <h1>Ejercicio 26: Guardar y Recuperar Datos de Usuario en localStorage</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Paso 1: Crear el objeto usuario
const usuario = {
  nombre: "Juan Perez",
  edad: 25,
  email: "juan.perez@example.com",
};

// Paso 2: Convertir el objeto a JSON y guardarlo en localStorage
localStorage.setItem("usuario", JSON.stringify(usuario));

// Paso 3: Recuperar los datos y convertirlos de nuevo a un objeto
const usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));

// Paso 4: Imprimir en la consola los datos
console.log("Objeto original:", usuario);
console.log("Objeto recuperado de localStorage:", usuarioRecuperado);
```
