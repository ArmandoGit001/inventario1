package com.inventario.inventario1.service;

import com.inventario.inventario1.model.Movimiento;
import com.inventario.inventario1.repository.MovimientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovimientoService {
    @Autowired
    private MovimientoRepository repo;

    public Movimiento guardar(Movimiento movimiento) {
        return repo.save(movimiento);
    }
}