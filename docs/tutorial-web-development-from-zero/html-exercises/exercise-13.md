---
sidebar_position: 13
---

# Ejercicio práctico HTML 13

## Objetivo

Audio Integrado

### Actividad

Inserta un archivo de audio usando la etiqueta `<audio>`.

### Solución

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Audio Integrado</title>
  </head>
  <body>
    <h2>Audio</h2>
    <audio controls>
      <source src="audio/mi_audio.mp3" type="audio/mpeg" />
      Tu navegador no soporta la reproducción de audio.
    </audio>
  </body>
</html>
```
