# Creación de un microservicio sencillo utilizando AWS Lambda y API Gateway

Construcción de una lambda en AWS para guardar registros a una BD MySQL.

## Desarrollo de la lambda

### Implementación mediante AWS Lambda, AWS API Gateway, NodeJS, MySQL, Sequelize.

##### Para la BD

- [ ] Previamente tener una conexión a una base de datos MySQL (Se me facilitaron anticipadamente los datos para la conexión).
- [ ] Se creo una tabla para el almacenamiento de la información.
- [ ] Se utilizó SQLWorkbench para la visualización de la información y para corroborar que los datos fueran insertados.

<img width="1026" alt="Screen Shot 2022-09-14 at 18 23 41" src="https://user-images.githubusercontent.com/10554445/190279941-7139f7c1-8e9b-41ea-a5ac-ea5d5a83d9d8.png">

<img width="1026" alt="Screen Shot 2022-09-14 at 18 26 44" src="https://user-images.githubusercontent.com/10554445/190280150-27b54107-961d-4b73-a8b0-87343858818a.png">

##### Para la Lambda

- [ ] Previamente tener una cuenta en aws con permisos para crear AWS Lambda y AWS API Gateway.

  - Lo demás que se necesite instalar se encuentra descrito en el archivo package.json

<img width="1440" alt="Screen Shot 2022-09-14 at 18 11 46" src="https://user-images.githubusercontent.com/10554445/190278792-e776eb1f-1b7b-4492-b9e4-e0307e8927a1.png">

##### Para el API REST

- [ ] Previamente tener una cuenta en aws con permisos para crear AWS Lambda y AWS API Gateway.
- [ ] Se creó un API REST utilizando AWS API Gateway.

<img width="985" alt="Screen Shot 2022-09-14 at 18 29 28" src="https://user-images.githubusercontent.com/10554445/190280387-0afbfda8-a402-4bd0-96ea-2ef8e2cbbf65.png">

##### Peticiones 
Para este ejercicio se utilizo una única petición:
  - POST

<img width="1440" alt="Screen Shot 2022-09-14 at 18 16 25" src="https://user-images.githubusercontent.com/10554445/190279268-c2bba844-79c7-45fb-a6dc-aeceb710aa3d.png">
 
##### Notas finales:
Mejoras futuras:
  - Se creó un API REST público para cuestión de pruebas, en un caso real se necesitaría montar toda la infraestructura AWS correspondiente para mantener la seguridad de las APIs.
  - Se pueden agregar más validaciones en los datos de entrada.




