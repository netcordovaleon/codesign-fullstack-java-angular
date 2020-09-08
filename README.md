# Proyecto FullStack

Proyecto Modelo donde se aplicarán las siguientes tecnologias:
- FrontEnd Angular
- BackEnd JavaSpring
- DataBase MSSQL
- Docker Files
- Docker Compose

El servicio Docker FRONTEND expone el puerto 4200, al ejecutar debe validar q este puerto se encuentre libre.
```yaml
  frontend: 
    container_name: frontend
    build: ./frontend/website 
    ports: 
    - '4200:4200'
    command: > 
      bash -c "npm install && ng serve --host 0.0.0.0 --port 4200 --disable-host-check"
    networks:
      - fullstack
    depends_on:
      - backend   
```

El servicio Docker BACKEND expone el puerto 8080, al ejecutar debe validar q este puerto se encuentre libre, además puede revisar el archivo DockerFile q se encuentra dentro de la carpeta microservices
```yaml
  backend:
    container_name: backend
    build: ./backend/microservices
    ports:
      - "8080:8080"
    networks:
      - fullstack
    depends_on:
      - sqlserver
    environment:
      - DATABASE_HOST=sqlserver
      - DATABASE_USER=sa
      - DATABASE_PASSWORD=AQUI_LA_CONTRASENIA_DE_BD
      - DATABASE_NAME=springexample  
      - DATABASE_PORT=1433
```

El servicio Docker DATABASE es el unico que contiene un VOLUMES, ya que necesitamos mantener los objetos como tablas y data de la BD, si no desea grabar nada entonces puede comentar las lineas de "VOLUMES"
```yaml
  sqlserver:
    image: mcr.microsoft.com/mssql/server
    container_name: sqlserver2019
    ports:
    - 1433:1433
    environment:
      ACCEPT_EULA: Y
      SA_PASSWORD: AQUI_LA_CONTRASENIA_DE_BD
    networks:
      - fullstack
    volumes:
      - ./database:/var/opt/mssql/data
```

## BackEnd

Este proyecto contiene servicios en Java con framework SpringBoot, expone 4 endpoints realizando un CRUD:

```java
Entidad - Productos:
- GET
- POST
- PUT
- DELETE
```

## FrontEnd
Este proyecto contiene un site construido en Angular + Bootstrap + LazyLoading, si desea ejecutar solo el proyecto FrontEnd debe ejecutar los siguientes comandos

```javascript
npm install
```

## DataBase

Esta carpeta solo registra el "volumen" de la BD para mantener la persistencia de los objetos que se puedan crear
