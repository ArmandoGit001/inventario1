IDE: Visual Studio Code, Version: 1.99.3 (Universal)
Lenguaje de programación: 
BACKEND: JDK 24 (Java SE Development Kit 24.0.2) SPRINGBOOT 3.5.4
FRONTEND: Javascript, Angular 20 con componentes standalone
DBMS: mySQL Workbench 8.0

--Dependencias para Backend--
Spring Web WEB
Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container.

Spring Data JPA SQL
Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.

MySQL Driver SQL
MySQL JDBC driver.

Spring Boot DevTools DEVELOPER TOOLS
Provides fast application restarts, LiveReload, and configurations for enhanced development experience.

Spring Security SECURITY
Highly customizable authentication and access-control framework for Spring applications.

Lombok DEVELOPER TOOLS
Java annotation library which helps to reduce boilerplate code.

-- INSTRUCCIONES PARA CORRER LA APLICACIÓN --
POR AHORA LA APLICACIÓN SOLO FUNCIONA EN UN ENTORNO LOCAL CON JAVA, MYSQL.
1. INSTALAR LAS DEPENDENCIAS MENCIONADAS ANTERIORMENTE PARA EL BACKEND
2. INSTALAR LAS DEPENDENCIAS DE ANGULAR:
-Node.js
-npm
-angular CLI
3. cargar el script de sql script2_2 en mySQL workbench para generar la base de datos
4. Usar el IDE para abrir las carpetas de frontend y backend y ejecutar desde consola
5. Abrir la carpeta Inventario1-frontend y ejecutar con  ng serve
6. Abrir la carpeta Inventario1 y ejecutar con ./mvnw spring-boot:run
7. La aplicación correra en http://localhost:4200/
