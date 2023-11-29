Proyecto de Tabla de Pacientes con MongoDB y Express
Este pequeño proyecto tiene como objetivo simular una tabla de pacientes, donde se aplicarán operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando MongoDB como base de datos y Express como framework de servidor en Node.js.

Objetivo del Proyecto
El principal objetivo de este proyecto es adquirir conocimientos básicos sobre MongoDB y su integración con una aplicación Node.js utilizando Express. Se enfocará en la implementación de operaciones CRUD para gestionar datos de pacientes en una base de datos MongoDB.

Tecnologías Utilizadas
MongoDB: Base de datos NoSQL que almacenará la información de los pacientes. Documentación MongoDB

Express.js: Framework web para Node.js que facilita la creación de aplicaciones y APIs. Documentación Express.js

Node.js: Entorno de ejecución para JavaScript que permite ejecutar código del lado del servidor. Sitio oficial de Node.js

Configuración del Proyecto
Instalación de Dependencias:

Asegúrate de tener Node.js instalado en tu sistema.
Clona este repositorio y ejecuta npm install para instalar las dependencias.
Configuración de MongoDB:

Instala MongoDB en tu sistema siguiendo las instrucciones de la documentación oficial.
Crea una base de datos y una colección para almacenar la información de los pacientes.
Configuración de Variables de Entorno:

Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias, como la cadena de conexión a la base de datos MongoDB.
Ejecutar la Aplicación
Ejecuta el siguiente comando para iniciar la aplicación:

bash
Copy code
npm start
La aplicación estará disponible en http://localhost:3000 por defecto.

Endpoints API
GET /pacientes: Obtiene la lista de todos los pacientes.
GET /pacientes/id-name obtiene los ids y sus respectivos nombres
POST /pacientes Crea un nuevo paciente.
PUT /patients/:id: Actualiza la información de un paciente existente. ( aun en desarollo)
DELETE /pacientes/:id: Elimina un paciente.
Contribuciones y Problemas
Si encuentras algún problema o tienes alguna sugerencia de mejora, siéntete libre de abrir un issue o enviar un pull request.

¡Esperamos que este proyecto te ayude a comprender mejor la integración de MongoDB y Express en una aplicación Node.js!
