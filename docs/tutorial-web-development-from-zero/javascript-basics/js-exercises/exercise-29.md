---
sidebar_position: 29
---

# Ejercicio de JavaScript 29

Evitar Propagación de Eventos con `e.stopPropagation()`

## Objetivo

Aprender a evitar que un evento se propague a elementos padres usando `e.stopPropagation()`.

### Actividad

1. Crea un contenedor `div` que tenga dentro un botón.
2. Agrega un evento de clic al `div` que muestre un mensaje en la consola indicando que se ha clicado el contenedor.
3. Agrega un evento de clic al botón que muestre un mensaje diferente, y usa `e.stopPropagation()` para evitar que el clic en el botón también dispare el evento del `div` contenedor.
4. Observa cómo `e.stopPropagation()` impide la propagación del evento al contenedor.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Evitar Propagación de Eventos con e.stopPropagation()</title>
  </head>
  <body>
    <h1>Ejercicio 29: Evitar Propagación de Eventos con e.stopPropagation()</h1>

    <div id="container" style="padding: 20px; background-color: #e0e0e0;">
      Contenedor
      <button id="innerButton">Botón Interno</button>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Evento para el contenedor
document.getElementById("container").addEventListener("click", () => {
  console.log("Haz clic en el contenedor");
});

// Evento para el botón interno con e.stopPropagation()
document.getElementById("innerButton").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Haz clic en el botón interno");
});
```
