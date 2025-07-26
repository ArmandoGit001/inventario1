
-- crear la base de datos
CREATE DATABASE inventario1;
USE inventario1 ;

-- tabla roles:
CREATE TABLE roles (
  idRol INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL
);

-- tabla usuarios
CREATE TABLE usuarios (
  idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  contraseña VARCHAR(25) NOT NULL,
  idRol INT NOT NULL,
  estatus INT,
  FOREIGN KEY (idRol) REFERENCES roles(idRol)
);

-- tabla productos
CREATE TABLE productos (
  idProducto INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  cantidad INT NOT NULL DEFAULT 0,
  activo BOOLEAN NOT NULL
);

-- tabls tipos_movimiento
CREATE TABLE  tipos_movimiento (
  idTipo INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL
);

-- tabla movimientos
CREATE TABLE movimientos (
  idMovimiento INT PRIMARY KEY AUTO_INCREMENT,
  idProducto INT NOT NULL,
  idUsuario INT NOT NULL,
  idTipo INT NOT NULL,
  cantidad INT NOT NULL,
  fecha DATETIME NOT NULL,
  FOREIGN KEY (idProducto) REFERENCES productos(idProducto),
  FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario),
  FOREIGN KEY (idTipo) REFERENCES tipos_movimiento(idTipo)
);

-- insertar roles y usuarios para pruebas 
INSERT INTO roles (nombre) VALUES ('ADMIN');
INSERT INTO roles (nombre) VALUES ('ALMACENISTA');

INSERT INTO usuarios (nombre, correo, contraseña, idRol, estatus) VALUES 
('admin', 'admin1@gmail.com', 'admin123', 1, 1),
('almacenista', 'almacenista1@gmail.com', 'almacen123', 2, 1);

SELECT * FROM usuarios;