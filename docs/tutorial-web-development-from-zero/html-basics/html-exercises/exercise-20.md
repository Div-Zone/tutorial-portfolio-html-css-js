---
sidebar_position: 20
---

# Ejercicio práctico HTML 20

## Objetivo

Formularios con Campos de Fecha y Número

### Actividad

Crea un formulario HTML que incluya campos de fecha `<input type="date">` y número `<input type="number">`. Añade también un botón para enviar el formulario

### Solución

```html title="html"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Formulario con Fecha y Número</title>
  </head>
  <body>
    <h2>Formulario con Fecha y Número</h2>
    <form>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" />
      <br />
      <label for="fecha-nacimiento">Fecha de Nacimiento:</label>
      <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" />
      <br />
      <label for="edad">Edad:</label>
      <input type="number" id="edad" name="edad" min="1" max="120" />
      <br />
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" />
      <br />
      <button type="submit">Enviar</button>
    </form>
  </body>
</html>
```
