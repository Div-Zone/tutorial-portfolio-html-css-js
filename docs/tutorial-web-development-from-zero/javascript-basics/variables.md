---
sidebar_position: 2
---

# Variables en JavaScript

## Las Variables son Contenedores para Almacenar Datos

Las Variables JavaScript pueden ser declaradas de 4 maneras:

- Automáticamente
- Usando var
- Usando let
- Con const

En este primer ejemplo, x, y y z son variables no declaradas.

Se declaran automáticamente cuando se utilizan por primera vez:

```javascript title="JS"
x = 5;
y = 6;
z = x + y;
```

:::tip NOTA
Se considera una buena práctica de programación declarar siempre las variables antes de utilizarlas.
:::

A partir de los ejemplos se puede adivinar:

- x almacena el valor 5
- y almacena el valor 6
- z almacena el valor 11

```javascript title="JS"
var x = 5;
var y = 6;
var z = x + y;
```

:::tip NOTA
La palabra clave var se utilizó en todo el código JavaScript desde 1995 hasta 2015.

Las palabras clave let y const se añadieron a JavaScript en 2015.

La palabra clave var solo debe utilizarse en código escrito para navegadores antiguos.
:::

Ejemplo:

```javascript title="JS"
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
```

Las dos variables `price1` y `price2` se declaran con la palabra clave `const`.

Son valores constantes y no pueden modificarse.

La variable total se declara con la palabra clave `let`.

El valor total puede modificarse.

:::tip NOTA
¿Cuándo utilizar var, let o const?

1. Declarar siempre las variables antes de su uso

2. Utilice siempre const si el valor no debe modificarse

3. Utilice siempre const si el tipo no debe modificarse (matrices y objetos)

4. Utiliza let sólo si no puedes utilizar const

5. Sólo use var si DEBE soportar navegadores antiguos.
   :::

## Como en álgebra

Al igual que en álgebra, las variables contienen valores:

```javascript title="JS"
let x = 5;
y = 6;
```

Al igual que en álgebra, las variables se utilizan en expresiones:

```javascript title="JS"
let z = x + y;
```

En el ejemplo anterior, puedes adivinar que el total calculado es 11.

:::tip NOTA
Las variables son contenedores para almacenar valores.
:::

## Identificadores de JavaScript

Todas las variables de JavaScript deben identificarse con nombres únicos.

Estos nombres únicos se llaman identificadores.

Los identificadores pueden ser nombres cortos (como x e y) o nombres más descriptivos (edad, suma, totalVolumen).

Las reglas generales para construir nombres para variables (identificadores únicos) son:

- Los nombres pueden contener letras, dígitos, guiones bajos y signos de dólar.
- Los nombres deben empezar por una letra.
- Los nombres también pueden empezar por $ y \_ (pero no lo utilizaremos en este tutorial).
- Los nombres distinguen entre mayúsculas y minúsculas (y e Y son variables diferentes).
- Las palabras reservadas (como las palabras clave de JavaScript) no pueden usarse como- nombres.

:::tip NOTA
Los identificadores de JavaScript distinguen entre mayúsculas y minúsculas.
El operador de asignación
:::

En JavaScript, el signo igual (=) es un operador de "asignación", no un operador de "igual a".

Esto es diferente del álgebra. Lo siguiente no tiene sentido en álgebra:

```javascript title="JS"
x = x + 5;
```

En JavaScript, sin embargo, tiene perfecto sentido: asigna el valor de x + 5 a x.

(Calcula el valor de x + 5 y pone el resultado en x. El valor de x se incrementa en 5.)

:::tip NOTA
El operador "igual a" se escribe como == en JavaScript.
:::

## Tipos de datos de JavaScript

Las variables de JavaScript pueden contener números como 100 y valores de texto como "John Doe".

En programación, los valores de texto se denominan cadenas de texto.

JavaScript puede manejar muchos tipos de datos, pero por ahora, sólo piense en números y cadenas.

Las cadenas se escriben entre comillas dobles o simples. Los números se escriben sin comillas.

Si pone un número entre comillas, se tratará como una cadena de texto.

Ejemplo:

```javascript title="JS"
const pi = 3.14;
let persona = "Juan Pérez";
let respuesta = "¡Sí, soy yo!";
```

## Declarar una variable en JavaScript

La creación de una variable en JavaScript se denomina "declarar" una variable.

Una variable JavaScript se declara con la palabra clave var o let:

```javascript title="JS"
var carNombre;
// o
let nombrecoche;
```

Después de la declaración, la variable no tiene valor (técnicamente es indefinida).

Para asignar un valor a la variable, utilice el signo igual:

```javascript title="JS"
carName = "Volvo";
```

También puedes asignar un valor a la variable al declararla:

```javascript title="JS"
let nombredelcoche = "Volvo";
```

En el siguiente ejemplo, creamos una variable llamada nombredelcoche y le asignamos el valor "Volvo".

A continuación, "imprimimos" el valor dentro de un párrafo HTML con id="demo":

Ejemplo:

```html title="HTML"
<p id="demo"></p>

<script>
  let carName = "Volvo";
  document.getElementById("demo").innerHTML = nombredelcoche;
</script>
```

:::tip NOTA
Es una buena práctica de programación declarar todas las variables al principio de un script.
**Una sentencia, muchas variables**
:::

## Puedes declarar muchas variables en una sentencia.

Comienza la sentencia con let y separa las variables con una coma:

Ejemplo:

```javascript title="JS"
let persona = "Juan Pérez",
  nombredelcoche = "Volvo",
  precio = 200;
```

Una declaración puede abarcar varias líneas:

Ejemplo:

```javascript title="JS"
let persona = "Juan Pérez",
  nombredelcoche = "Volvo",
  precio = 200;
Valor = indefinido;
```

En los programas informáticos, las variables se declaran a menudo sin un valor. El valor puede ser algo que tiene que ser calculado, o algo que se proporcionará más tarde, como la entrada del usuario.

Una variable declarada sin valor tendrá el valor indefinido.

:::tip NOTA
No se puede volver a declarar una variable declarada con let o const.
:::

Esto no funcionará:

```javascript title="JS"
let nombredelcoche = "Volvo";
let nombredelcoche;
```

## Aritmética en JavaScript

Al igual que con el álgebra, puedes hacer operaciones aritméticas con variables JavaScript, utilizando operadores como = y +:

Ejemplo:

```javascript title="JS"
let x = 5 + 2 + 3;
```

También puedes sumar cadenas, pero las cadenas se concatenarán:

Ejemplo:

```javascript title="JS"
let x = "John" + " " + "Doe";
```

Prueba también esto:

```javascript title="JS"
let x = "5" + 2 + 3;
```

:::tip NOTA
Si pones un número entre comillas, el resto de los números serán tratados como cadenas, y concatenados.
:::

Ahora prueba esto:

```javascript title="JS"
let x = 2 + 3 + "5";
```

## JavaScript Signo de Dólar $

Dado que JavaScript trata un signo de dólar como una letra, los identificadores que contienen $ son nombres de variable válidos:

Ejemplo:

```javascript title="JS"
let $ = "Hola Mundo";
let $$$ = 2;
let $myMoney = 5;
```

El uso del signo del dólar no es muy común en JavaScript, pero los programadores profesionales suelen utilizarlo como alias de la función principal de una biblioteca JavaScript.

En la biblioteca de JavaScript jQuery, por ejemplo, la función principal $ se utiliza para seleccionar elementos HTML. En jQuery $("p"); significa "seleccionar todos los elementos p".
Guión bajo (\_) en JavaScript

Dado que JavaScript trata el guión bajo como una letra, los identificadores que contienen \_ son nombres de variable válidos:

Ejemplo:

```javascript title="JS"
let \_apellido = "Johnson";
let \_x = 2
let \_100 = 5;
```

El uso del guión bajo no es muy común en JavaScript, pero una convención entre los programadores profesionales es utilizarlo como alias para variables "privadas (ocultas)".

## Ejercicio:

1. Declara una variable llamada city y asígnale el valor "New York".

2. Crea una variable num1 y asígnale el valor 15. Luego, crea otra variable num2 y asígnale el valor 30. Declara una tercera variable total y asígnale la suma de num1 y num2.

3. Declara una variable temperature y asígnale el valor 25. Multiplica este valor por 9, divide el resultado por 5 y luego suma 32 para convertir la temperatura a Fahrenheit. Guarda el resultado en una variable llamada temperatureF.

4. Declara dos variables length y width, asígnales valores y calcula el área de un rectángulo. Guarda el resultado en una variable llamada area.

5. Declara una variable radius y asígnale un valor. Calcula el área de un círculo (π \* radius^2) y guarda el resultado en una variable llamada circleArea.

6. Crea una variable name y asígnale tu nombre. Luego, crea una variable greeting que contenga la cadena "Hola, " seguida de tu nombre.

7. Declara una variable score y asígnale el valor 85. Luego, decrementa el valor de score en 5.

8. Crea una variable isRaining y asígnale el valor true. Luego, crea una variable weatherMessage que contenga la cadena "Está lloviendo" si isRaining es true, o "No está lloviendo" si isRaining es false.

9. Declara una variable price y asígnale el valor 100. Luego, aplica un descuento del 20% y guarda el nuevo valor en una variable llamada discountedPrice.

10. Declara una variable yearOfBirth y asígnale tu año de nacimiento. Calcula tu edad restando yearOfBirth del año actual y guarda el resultado en una variable llamada age.

11. Crea una variable x y asígnale el valor 10. Luego, incrementa el valor de x en 5.

12. Declara una variable num y asígnale el valor 4. Calcula el cuadrado de num (num \* num) y guarda el resultado en una variable llamada square.

13. Crea una variable isWeekend y asígnale el valor false. Luego, cambia el valor de isWeekend a true.

14. Declara una variable firstName y asígnale tu nombre. Luego, declara otra variable lastName y asígnale tu apellido. Crea una tercera variable fullName que contenga la concatenación de firstName y lastName.

15. Declara una variable distance y asígnale el valor 150. Divide este valor por 2 y guarda el resultado en una variable llamada halfDistance.

16. Crea una variable hours y asígnale el valor 8. Convierte este valor a minutos (multiplicando por 60) y guarda el resultado en una variable llamada minutes.

17. Declara una variable score y asígnale el valor 72. Luego, incrementa el valor de score en 28.

18. Crea una variable a y asígnale el valor 5. Luego, crea otra variable b y asígnale el valor 10. Declara una tercera variable product y asígnale el producto de a y b.

19. Declara una variable num y asígnale el valor 7. Calcula el cubo de num (num _ num _ num) y guarda el resultado en una variable llamada cube.

20. Crea una variable isStudent y asígnale el valor true. Luego, cambia el valor de isStudent a false.
