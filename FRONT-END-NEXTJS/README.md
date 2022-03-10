# COMANDOS PARA CREAR PROYECTO:

Para crear archivo de configuración package.json:
### npm init –y

Para instalar next react y react-dom:
### npm install next react react-dom

Para instar isomorphic-fetch.
### npm install --save isomorphic-fetch

Creamos una carpeta llamada **pages**. Dentro de esta carpeta crearemos nuestros archivos js que serán las páginas de nuestro proyecto.

Creamos también una carpeta llamada **components** para crear nuestros componenetes.

Modeficamos el package json y ponemos el siguiente código en la sección de scripts.

"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }

Comando para arrancar aplicación:
### npm run dev

Para solicitar datos podemos hacer lo que indica en la siguiente URL:
https://nextjs.org/docs/api-reference/data-fetching/get-initial-props