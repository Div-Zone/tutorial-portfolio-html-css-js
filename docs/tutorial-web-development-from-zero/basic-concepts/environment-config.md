---
sidebar_position: 3
---

# Configuración del entorno

Para comenzar a desarrollar con **HTML**, **CSS** y **JavaScript**, es fundamental tener un entorno de desarrollo bien configurado. Este artículo te guiará a través de los pasos necesarios para descargar e instalar las herramientas esenciales.

## Exploradores Web

Tener varios navegadores instalados es crucial para probar y asegurar que tus sitios web funcionen correctamente en diferentes entornos. Aquí están los pasos para instalar los navegadores más populares:

### Mozilla Firefox:

1. Visita la [página de descarga de Firefox](https://www.mozilla.org/en-US/firefox/new/).
2. Haz clic en el botón "Download Now" (Descargar ahora).
3. Ejecuta el archivo descargado y sigue las instrucciones para completar la instalación.

### Google Chrome:

1. Dirígete a la [página de descarga de Google Chrome](https://www.google.com/chrome/).
2. Haz clic en el botón "Download Chrome" (Descargar Chrome).
3. Ejecuta el archivo descargado y sigue las instrucciones de instalación.

### Microsoft Edge:

1. Accede a la [página de descarga de Microsoft Edge](https://www.microsoft.com/en-us/edge/download?form=MA13FJ).
2. Haz clic en el botón "Download" (Descargar).
3. Ejecuta el archivo descargado y sigue las instrucciones para instalar el navegador.

## Editor de Texto

Un buen editor de texto es esencial para escribir y gestionar tu código de manera eficiente. Visual Studio Code es una opción recomendada por su robustez y extensibilidad.

### Visual Studio Code:

1. Visita la [página de descarga de Visual Studio Code](https://code.visualstudio.com/download).
2. Selecciona la versión adecuada para tu sistema operativo (Windows, macOS o Linux).
3. Descarga el archivo y sigue las instrucciones de instalación.

## Control de Versiones

Git es una herramienta de control de versiones que te permitirá gestionar el historial de tu código y colaborar con otros desarrolladores.

### Git:

1. Ve a la [página de descarga de Git](https://git-scm.com/).
2. Selecciona la versión correspondiente a tu sistema operativo y descarga el instalador.
3. Ejecuta el instalador y sigue las instrucciones para completar la instalación.

## Repositorios

GitHub es una plataforma de alojamiento de repositorios Git que te permitirá almacenar tu código en línea y colaborar con otros desarrolladores.

### Crear una Cuenta en GitHub:

1. Visita [GitHub](https://github.com/).
2. Haz clic en "Sign up" (Registrarse) en la esquina superior derecha.
3. Completa el formulario de registro con tu información personal.
4. Verifica tu dirección de correo electrónico para activar tu cuenta.

## Diseño

Figma es una herramienta de diseño colaborativa basada en la web que te permitirá crear y compartir maquetas y prototipos de tu sitio web.

### Crear una Cuenta en Figma:

1. Accede a [Figma](https://www.figma.com/).
2. Haz clic en "Sign up" (Registrarse) en la esquina superior derecha.
3. Completa el formulario de registro con tu información personal.
4. Verifica tu dirección de correo electrónico para activar tu cuenta.

## Configuración Inicial

Una vez que hayas instalado las herramientas mencionadas, sigue estos pasos para configurar tu entorno de desarrollo:

### Configurar Git:

Abre una terminal (o la línea de comandos en Windows).

Luego configura tu nombre de usuario y correo electrónico en Git:

```git title="bash"
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@ejemplo.com"
```

Para ver la configuración de nuestro nombre de usuario y correo electrónico, ejecutar:

```git title="bash"
git config --global -l
```

### Clonar un Repositorio desde GitHub:

1. Abre GitHub y crea un nuevo repositorio.
2. Copia la URL del repositorio.
3. Abre la terminal y ejecuta:

```git title="bash"
git clone https://github.com/tuusuario/tu-repositorio.git
```

### Configurar Visual Studio Code:

1. Abre Visual Studio Code.

2. Instala extensiones útiles para el desarrollo web:
   Live Server: Para lanzar un servidor local y ver tus cambios en tiempo real.
   Prettier: Para formatear tu código automáticamente.
   ESLint: Para identificar y corregir problemas en tu códigoJavaScript.

3. Abre tu proyecto clonado desde GitHub en Visual Studio Code:
   Haz clic en _"File" (Archivo) > "Open Folder" (Abrir Carpeta)_ y selecciona la carpeta de tu proyecto.

## Conclusión

Tener un entorno de desarrollo bien configurado es crucial para el éxito en el desarrollo web. Siguiendo estos pasos, estarás preparado para comenzar a crear proyectos con HTML, CSS y JavaScript de manera eficiente y organizada. Además, podrás colaborar con otros desarrolladores y probar tus proyectos en diferentes navegadores para asegurar su compatibilidad y funcionalidad.
