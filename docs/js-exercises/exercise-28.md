---
sidebar_position: 28
---

# Ejercicio de JavaScript 28

Identificar Elementos con `e.target.dataset.id`

## Objetivo

Aprender a usar `e.target.dataset.id` para identificar elementos específicos dentro de una lista. Practicar la manipulación de eventos y el uso de IDs almacenados en `data-attributes`.

### Actividad

1. Crea una lista de botones en HTML, y a cada botón asígnale un atributo `data-id` único.
2. Al hacer clic en cualquiera de los botones, muestra una alerta que diga: `"Has hecho clic en el botón con ID: [ID del botón]"`, usando el valor de `data-id`.
3. Usa `e.target.dataset.id` para obtener el ID del botón que se ha clicado.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Identificar Elementos con e.target.dataset.id</title>
  </head>
  <body>
    <button data-id="1">Botón 1</button>
    <button data-id="2">Botón 2</button>
    <button data-id="3">Botón 3</button>

    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Seleccionar todos los botones
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    // Obtener el data-id del botón clicado
    const id = e.target.dataset.id;
    alert(`Has hecho clic en el botón con ID: ${id}`);
  });
});
```
