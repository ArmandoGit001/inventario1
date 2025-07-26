package com.inventario.inventario1.repository;
import com.inventario.inventario1.model.Movimiento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovimientoRepository extends JpaRepository<Movimiento, Long>{
    
}
