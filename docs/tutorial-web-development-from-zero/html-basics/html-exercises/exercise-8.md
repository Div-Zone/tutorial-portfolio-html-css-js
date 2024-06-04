---
sidebar_position: 8
---

# Ejercicio práctico HTML 8

## Objetivo

Formularios con Selecciones y Botones de Radio

### Actividad

Añade al formulario anterior campos de selección `<select>` y botones de radio `<input type="radio">`.

### Solución

```html title="html"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Formulario con Selección y Radio</title>
  </head>
  <body>
    <h2>Formulario</h2>
    <form>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" />
      <br />
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label for="genero">Género:</label>
      <input type="radio" id="masculino" name="genero" value="masculino" />
      Masculino
      <input type="radio" id="femenino" name="genero" value="femenino" />
      Femenino
      <br />
      <label for="pais">País:</label>
      <select id="pais" name="pais">
        <option value="argentina">Argentina</option>
        <option value="brasil">Brasil</option>
        <option value="chile">Chile</option>
      </select>
      <br />
      <button type="submit">Enviar</button>
    </form>
  </body>
</html>
```
