package com.inventario.inventario1.controller;

import com.inventario.inventario1.model.Movimiento;
import com.inventario.inventario1.repository.MovimientoRepository;
import com.inventario.inventario1.model.Producto;
import com.inventario.inventario1.service.ProductoService;
import com.inventario.inventario1.model.Usuario;
import com.inventario.inventario1.service.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @Autowired
    private MovimientoRepository movimientoRepository;

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Producto> listarTodos() {
        return productoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Optional<Producto> obtenerPorId(@PathVariable Integer id) {
        return productoService.obtenerPorId(id);
    }

    @GetMapping("/activos")
    public List<Producto> getProductosActivos() {
        return productoService.obtenerProductosActivos();
    }

    @GetMapping("/inactivos")
    public List<Producto> getProductosInactivos() {
        return productoService.obtenerProductosInactivos();
    }

    @PostMapping
    public ResponseEntity<Producto> agregarProducto(@RequestBody Producto producto) {
        producto.setActivo(true); // por defecto activo
        Producto nuevo = productoService.guardarProducto(producto);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}")
    public Producto actualizar(@PathVariable Integer id, @RequestBody Producto producto) {
        producto.setId_producto(id);
        return productoService.guardar(producto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        productoService.eliminar(id);
    }

    @PutMapping("/{id}/baja")
    public ResponseEntity<?> darDeBaja(@PathVariable Integer id) {
        productoService.darDeBaja(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}/reactivar")
    public ResponseEntity<?> reactivar(@PathVariable Integer id) {
        productoService.reactivarProducto(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}/entradas")
    public ResponseEntity<?> agregarCantidad(@PathVariable Integer id, @RequestBody Map<String, Integer> body) {
        Integer cantidad = body.get("cantidad");
        Integer id_usuario = body.get("id_usuario");

        productoService.agregarCantidad(id, cantidad,id_usuario);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}/salidas")
    public ResponseEntity<?> registrarSalida(@PathVariable Integer id, @RequestBody Map<String, Integer> body) {
        int cantidad = body.get("cantidad");
        Integer id_usuario = body.get("id_usuario");

        productoService.registrarSalidaProducto(id, cantidad, id_usuario);

        return ResponseEntity.ok().build();
    }
}
