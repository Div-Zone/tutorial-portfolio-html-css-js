---
sidebar_position: 30
---

# Ejercicio de JavaScript 30

Crear una Lista de Tareas con `data-id` y `remove()`

## Objetivo

Practicar la manipulación de eventos del DOM creando una lista de tareas donde cada tarea pueda eliminarse usando `e.target.dataset.id` para identificarla.

### Actividad

1. Crea una lista en HTML con algunas tareas y un botón "Eliminar" junto a cada tarea. Cada tarea debe tener un atributo `data-id` único.
2. Al hacer clic en el botón "Eliminar", identifica la tarea que se debe eliminar usando `e.target.dataset.id` y elimina solo esa tarea del DOM.
3. Asegúrate de que el evento solo afecte al botón "Eliminar" y no al resto del contenedor.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Crear una Lista de Tareas con data-id y remove()</title>
  </head>
  <body>
    <h1>Ejercicio 30: Crear una Lista de Tareas con data-id y remove()</h1>

    <ul id="taskList">
      <li data-id="1">Tarea 1 <button class="deleteBtn">Eliminar</button></li>
      <li data-id="2">Tarea 2 <button class="deleteBtn">Eliminar</button></li>
      <li data-id="3">Tarea 3 <button class="deleteBtn">Eliminar</button></li>
    </ul>

    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Seleccionar la lista de tareas y agregar evento al botón de eliminar
document.getElementById("taskList").addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    // Obtener el id de la tarea usando dataset.id
    const taskId = e.target.parentElement.dataset.id;
    console.log(`Eliminando tarea con ID: ${taskId}`);
    // Eliminar la tarea del DOM
    e.target.parentElement.remove();
  }
});
```
