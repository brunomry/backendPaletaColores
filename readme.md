# Backend de Paleta de colores

Este proyecto es el backend de la aplicación web sobre Paleta de colores.

## Descripción

Este backend se encarga de manejar la lógica del servidor y la comunicación con la base de datos para la aplicación de blog de recetas de cocina.

## Enunciado - Requerimientos

Crear un proyecto de backend con los endpoints necesarios para poder agregar,
listar, borrar, editar y obtener una paleta de colores. Cada color será un objeto que
contenga al menos las siguientes propiedades:
1. código único
2. nombre del color
3. código hexadecimal (opcional)
4. código RGB o RGBA (opcional)
Modelar la base de datos necesaria con MongoDB para almacenar estos datos y
validar los datos recibidos en los request antes de almacenar en la base de datos.

## Integración con proyecto de Frontend

Este proyecto de Backend se integró a su proyecto Frontend correspondiente.

### Repositorio Frontend: [frontendPaletaDeColores](https://github.com/brunomry/frontendPaletaDeColores.git)

## Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript

## Funcionalidades Principales

- Endpoint para listar todos los colores.
- Endpoint para obtener el detalle de un color específico.
- Endpoint para agregar un nuevo color.
- Endpoint para modificar los detalles de un color específico.
- Endpoint para eliminar un color.

## Requisitos Previos

- Node.js instalado en el sistema.
- MongoDB instalado (o extension de VS) y en ejecución en el sistema o conexión a una instancia de MongoDB en la nube.

## Instalación y Ejecución

1. Clonar este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/brunomry/backendPaletaColores.git

## Autor

Bruno Madozzo Romay