package com.inventario.inventario1.service;

import com.inventario.inventario1.model.Producto;
import com.inventario.inventario1.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.inventario.inventario1.model.Movimiento;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private MovimientoService movimientoService;

    public List<Producto> listarTodos() {
        return productoRepository.findAll();
    }

    public List<Producto> obtenerProductosActivos() {
        return productoRepository.findByActivo(true);
    }

    public Optional<Producto> obtenerPorId(Integer id) {
        return productoRepository.findById(id);
    }

    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    public void eliminar(Integer id) {
        productoRepository.deleteById(id);
    }

    public Producto guardarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    public void darDeBaja(Integer id) {
        Producto p = productoRepository.findById(id).orElseThrow();
        p.setActivo(false);
        productoRepository.save(p);
    }
    
    public List<Producto> obtenerProductosInactivos() {
        return productoRepository.findByActivo(false);
    }
    
    public void reactivarProducto(Integer id) {
        Optional<Producto> optional = productoRepository.findById(id);
        if (optional.isPresent()) {
            Producto producto = optional.get();
            producto.setActivo(true);
            productoRepository.save(producto);
        }
    }

    //Agregar cantidad de producto al inventario
    public void agregarCantidad(Integer id, Integer cantidad, Integer id_usuario) {
        Optional<Producto> optionalProducto = productoRepository.findById(id);
        if (optionalProducto.isPresent()) {
            Producto producto = optionalProducto.get();
            producto.setCantidad(producto.getCantidad() + cantidad);
            productoRepository.save(producto);

            /* REGISTRAR MOVIMIENTO */
            Movimiento m = new Movimiento();
            m.setId_producto(id);
            m.setCantidad(cantidad);
            m.setFecha(LocalDateTime.now());
            m.setId_usuario(id_usuario);
            m.setId_tipo(1);    //Entrada

            movimientoService.guardar(m);
        }
    }

    /* Salida del INVENTARIO */
    public void registrarSalidaProducto(Integer id_producto, Integer cantidad, Integer id_usuario) {
        Producto producto = productoRepository.findById(id_producto)
            .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    
        if (producto.getCantidad() < cantidad) {
            throw new RuntimeException("Stock insuficiente para la salida.");
        }
    
        producto.setCantidad(producto.getCantidad() - cantidad);
        productoRepository.save(producto);
    
        Movimiento m = new Movimiento();
        m.setId_producto(id_producto);
        m.setCantidad(cantidad);
        m.setFecha(LocalDateTime.now());
        m.setId_tipo(2);    //salida
        m.setId_usuario(id_usuario);
    
        movimientoService.guardar(m);
    }
    

}
