
-- crear la base de datos
CREATE DATABASE inventario2;
USE inventario2 ;

-- tabla roles:
CREATE TABLE roles (
  id_rol INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL
);

-- tabla usuarios
CREATE TABLE usuarios (
  id_usuario INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  contrasena VARCHAR(25) NOT NULL,
  id_rol INT NOT NULL,
  estatus INT,
  FOREIGN KEY (id_rol) REFERENCES roles(id_rol)
);

-- tabla productos
CREATE TABLE productos (
  id_producto INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  descripcion VARCHAR(100) NOT NULL,
  cantidad INT NOT NULL DEFAULT 0,
  activo BOOLEAN NOT NULL
);

-- tabls tipos_movimiento
CREATE TABLE  tipos_movimiento (
  id_tipo INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL
);

-- tabla movimientos
CREATE TABLE movimientos (
  id_movimiento INT PRIMARY KEY AUTO_INCREMENT,
  id_producto INT NOT NULL,
  id_usuario INT NOT NULL,
  id_tipo INT NOT NULL,
  cantidad INT NOT NULL,
  fecha DATETIME NOT NULL,
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  FOREIGN KEY (id_tipo) REFERENCES tipos_movimiento(id_tipo)
);

-- insertar roles y usuarios para pruebas 
INSERT INTO roles (nombre) VALUES ('ADMIN');
INSERT INTO roles (nombre) VALUES ('ALMACENISTA');

INSERT INTO usuarios (nombre, correo, contrasena, id_rol, estatus) VALUES 
('admin', 'admin@gmail.com', 'admin123', 1, 1),
('almacenista', 'almacenista@gmail.com', 'almacen123', 2, 1);
