---
sidebar_position: 27
---

# Ejercicio de JavaScript 27

Lista de Tareas con `localStorage`

## Objetivo

Aprender a almacenar y gestionar una lista de tareas en `localStorage`. Practicar el uso de `JSON.stringify` y `JSON.parse` para almacenar y recuperar arrays de objetos.

### Actividad

1. Crea una función `agregarTarea(tarea)` que reciba una tarea (como un string) y agregue la tarea a una lista de tareas en `localStorage`.
2. Si la lista de tareas ya existe en `localStorage`, agrega la nueva tarea al array existente. Si no existe, crea un nuevo array con la primera tarea.
3. Guarda la lista de tareas actualizada en `localStorage`.
4. Crea una función `mostrarTareas()` que recupere la lista de tareas desde `localStorage` y muestre cada tarea en la consola.
5. Llama a ambas funciones para agregar y mostrar algunas tareas.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lista de Tareas con localStorage</title>
  </head>
  <body>
    <h1>Ejercicio 27: Lista de Tareas con localStorage</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
// Función para agregar tareas al localStorage
function agregarTarea(tarea) {
  // Paso 1: Verificar si ya existe una lista de tareas
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  // Paso 2: Agregar la nueva tarea al array de tareas
  tareas.push(tarea);

  // Paso 3: Guardar la lista actualizada en localStorage
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para mostrar las tareas guardadas en localStorage
function mostrarTareas() {
  // Paso 4: Recuperar la lista de tareas desde localStorage
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  // Paso 5: Mostrar cada tarea en la consola
  console.log("Lista de tareas:");
  tareas.forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea}`);
  });
}

// Llamadas de ejemplo
agregarTarea("Aprender JavaScript");
agregarTarea("Practicar HTML y CSS");
agregarTarea("Estudiar localStorage");

mostrarTareas();
```
