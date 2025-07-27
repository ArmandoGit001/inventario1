package com.inventario.inventario1.service;

import com.inventario.inventario1.model.Movimiento;
import com.inventario.inventario1.repository.MovimientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovimientoService {

    @Autowired
    private MovimientoRepository movimientoRepository;

    public Movimiento guardar(Movimiento movimiento) {
        return movimientoRepository.save(movimiento);
    }

    public List<Movimiento> obtenerTodos() {
        return movimientoRepository.findAll();
    }
}
