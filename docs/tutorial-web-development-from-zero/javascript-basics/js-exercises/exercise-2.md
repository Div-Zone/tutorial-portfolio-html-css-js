---
sidebar_position: 2
---

# Ejercicio de JavaScript 2

Cambiando Color y Texto de un Elemento

## Objetivo

Aprender a cambiar el contenido de texto y el color de un elemento en una página web al hacer clic en un botón.

### Actividad

1. Crea un archivo HTML con un botón y un párrafo vacío.
2. Al hacer clic en el botón, cambia el contenido del párrafo y su color usando innerHTML y style.color.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cambiar Color y Texto</title>
  </head>
  <body>
    <h1>Ejercicio de Cambio de Color y Texto</h1>
    <button id="colorButton">Cambia el color</button>
    <p id="colorText"></p>

    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
const colorButton = document.getElementById("colorButton");
const colorText = document.getElementById("colorText");

colorButton.addEventListener("click", () => {
  colorText.innerHTML = "¡El color ha cambiado!";
  colorText.style.color = "blue";
});
```
