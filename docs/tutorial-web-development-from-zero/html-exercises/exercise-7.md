---
sidebar_position: 7
---

# Ejercicio práctico HTML 7

## Objetivo

Formularios Básicos

### Actividad

Crea un formulario con campos de texto, correo electrónico y un botón de envío.

### Solución

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Formulario Básico</title>
  </head>
  <body>
    <h2>Formulario</h2>
    <form>
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre" />
      <!-- <br />: Este es un salto de línea -->
      <br />
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" />
      <br />
      <button type="submit">Enviar</button>
    </form>
  </body>
</html>
```
