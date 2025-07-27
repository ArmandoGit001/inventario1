package com.inventario.inventario1.controller;

import com.inventario.inventario1.model.Movimiento;
import com.inventario.inventario1.service.MovimientoService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movimientos")
@CrossOrigin(origins = "http://localhost:4200")
public class MovimientoController {

    private final MovimientoService movimientoService;

    public MovimientoController(MovimientoService movimientoService) {
        this.movimientoService = movimientoService;
    }

    @GetMapping
    public List<Movimiento> listarMovimientos() {
        return movimientoService.obtenerTodos();
    }

    @PostMapping
    public Movimiento guardar(@RequestBody Movimiento movimiento) {
        return movimientoService.guardar(movimiento);
    }
}
