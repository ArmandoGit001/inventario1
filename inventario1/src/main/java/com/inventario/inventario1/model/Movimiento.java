package com.inventario.inventario1.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;


@Entity
@Table(name = "movimientos") 

public class Movimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_movimiento;

    private Integer id_usuario;
    private Integer id_tipo;
    private Integer cantidad;
    private LocalDateTime fecha;

    private String tipo; // "ENTRADA", "SALIDA"

    // Relación con Producto
    @ManyToOne
    @JoinColumn(name = "id_producto", referencedColumnName = "id_producto")
    private Producto producto;

    // Getters y Setters

    public Integer getId_movimiento() {
        return id_movimiento;
    }

    public void setId_movimiento(Integer id_movimiento) {
        this.id_movimiento = id_movimiento;
    }

    public Integer getId_usuario() {
        return id_usuario;
    }

    public void setId_usuario(Integer id_usuario) {
        this.id_usuario = id_usuario;
    }

    public Integer getId_tipo() {
        return id_tipo;
    }

    public void setId_tipo(Integer id_tipo) {
        this.id_tipo = id_tipo;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
