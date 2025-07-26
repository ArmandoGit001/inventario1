package com.inventario.inventario1.controller;

import com.inventario.inventario1.model.Producto;
import com.inventario.inventario1.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.Map;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200") 

public class ProductoController {

    @Autowired
    private ProductoService productoService;

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

    /*@PostMapping
    public Producto guardar(@RequestBody Producto producto) {
        return productoService.guardar(producto);
    }*/

    @PutMapping("/{id}")
    public Producto actualizar(@PathVariable Integer id, @RequestBody Producto producto) {
        producto.setId_producto(id);
        return productoService.guardar(producto);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Integer id) {
        productoService.eliminar(id);
    }
    
    @PostMapping
        public ResponseEntity<Producto> agregarProducto(@RequestBody Producto producto) {
        producto.setActivo(true); // por default activo
        Producto nuevo = productoService.guardarProducto(producto);
        return ResponseEntity.ok(nuevo);
    }

    @PutMapping("/{id}/baja")
    public ResponseEntity<?> darDeBaja(@PathVariable Integer id) {
        productoService.darDeBaja(id);
        return ResponseEntity.ok().build();
    }

    //dar de baja y reactivar los productos:
    @GetMapping("/inactivos")
    public List<Producto> getProductosInactivos() {
        return productoService.obtenerProductosInactivos();
    }

    @PutMapping("/{id}/reactivar")
    public ResponseEntity<?> reactivar(@PathVariable Integer id) {
        productoService.reactivarProducto(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}/entradas")
    public ResponseEntity<?> agregarCantidad(@PathVariable Integer id, @RequestBody Map<String, Integer> body) {
        Integer cantidad = body.get("cantidad");
        productoService.agregarCantidad(id, cantidad);
        return ResponseEntity.ok().build();
    }


}
