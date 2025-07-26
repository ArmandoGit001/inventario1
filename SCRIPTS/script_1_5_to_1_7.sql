CREATE DATABASE castores1;
USE castores1;
CREATE TABLE productos(
idProducto INT(6) PRIMARY KEY,
nombre VARCHAR(40),
precio DECIMAL(16,2));
CREATE TABLE ventas(
idVenta INT(6) PRIMARY KEY,
idProducto INT(6),
cantidad INT(6),
FOREIGN KEY (idProducto) REFERENCES productos(idProducto)
);
INSERT INTO productos (idProducto, nombre, precio)
VALUES
  (1, 'LAPTOP', 3000.00),
  (2, 'PC', 4000.00),
  (3, 'MOUSE', 100.00),
  (4, 'TECLADO', 150.00),
  (5, 'MONITOR', 2000.00),
  (6, 'MICROFONO', 350.00),
  (7, 'AUDIFONOS', 450.00);
INSERT INTO ventas (idVenta, idProducto, cantidad)
VALUES
  (1, 5, 8),
  (2, 1, 15),
  (3, 6, 13),
  (4, 6, 4),
  (5, 2, 3),
  (6, 5, 1),
  (7, 4, 5),
  (8, 2, 5),
  (9, 6, 2),
  (10, 1, 8);

-- 1_5 Traer todos los productos que tengan una venta.
-- si esto se refiere a “Al menos una venta”:  
SELECT DISTINCT p.idProducto, p.nombre, p.precio
FROM productos p INNER JOIN ventas v ON p.idProducto = v.idProducto;

-- Pero si se refiere a “una y solo una venta”:
SELECT p.idProducto, p.nombre, p.precio
FROM productos p INNER JOIN ventas v ON p.idProducto = v.idProducto
GROUP BY p.idProducto, p.nombre, p.precio
HAVING COUNT(v.idVenta) = 1;

-- 1_6 Traer todos los productos que tengan ventas y la cantidad total de productos vendidos.
SELECT p.idProducto, p.nombre, p.precio, SUM(v.cantidad) AS tot_prod
FROM productos p INNER JOIN ventas v ON p.idProducto = v.idProducto
GROUP BY p.idProducto, p.nombre, p.precio;

-- 1_7 Traer todos los productos (independientemente de si tienen ventas o no) y la suma total ($) vendida por producto.
SELECT p.idProducto, p.nombre, p.precio, IFNULL(SUM(v.cantidad),0) AS tot_prod, IFNULL(SUM(v.cantidad) * p.precio,0) AS tot_venta
FROM productos p 
LEFT JOIN ventas v ON p.idProducto = v.idProducto
GROUP BY p.idProducto, p.nombre, p.precio;


