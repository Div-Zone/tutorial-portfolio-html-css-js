---
sidebar_position: 24
---

# Ejercicio de JavaScript 24

Contar la Longitud de Cada Palabra con `forEach()`

## Objetivo

Aprender a usar `forEach()` para recorrer un array y realizar operaciones con cada elemento, en este caso, contar la cantidad de caracteres de cada palabra.

### Actividad

1. Crea un array que contenga varias palabras (por ejemplo, ["manzana", "pera", "plátano", "uva"]).
2. Usa `forEach()` para recorrer cada palabra en el array.
3. En cada iteración, cuenta la cantidad de letras de la palabra actual y muestra el resultado en la consola.

### Solución

### Paso 1: Crear el archivo index.html

```html title="HTML"
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contar la Longitud de Cada Palabra con ForEach()</title>
  </head>
  <body>
    <h1>Ejercicio 24: Contar la Longitud de Cada Palabra con ForEach()</h1>
    <p>Los cambios se muestran en consola.</p>
    <script src="script.js"></script>
  </body>
</html>
```

### Paso 2: Escribir el código en script.js

```javascript title="JavaScript"
const palabras = ["manzana", "pera", "plátano", "uva"];

palabras.forEach((palabra) => {
  console.log(`La palabra "${palabra}" tiene ${palabra.length} letras.`);
});
```
