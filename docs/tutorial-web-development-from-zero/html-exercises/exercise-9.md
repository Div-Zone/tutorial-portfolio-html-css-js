---
sidebar_position: 9
---

# Ejercicio práctico HTML 9

## Objetivo

Formularios con Casillas de Verificación

### Actividad

Añade al formulario anterior casillas de verificación `<input type="checkbox">`.

### Solución

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Formulario con Casillas de Verificación</title>
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
      <label>Intereses:</label>
      <input type="checkbox" id="musica" name="intereses" value="musica" />
      Música
      <input type="checkbox" id="deportes" name="intereses" value="deportes" />
      Deportes
      <input type="checkbox" id="lectura" name="intereses" value="lectura" />
      Lectura
      <br />
      <button type="submit">Enviar</button>
    </form>
  </body>
</html>
```
