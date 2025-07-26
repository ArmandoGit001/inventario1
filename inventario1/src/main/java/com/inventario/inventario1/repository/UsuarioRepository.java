package com.inventario.inventario1.repository;

import com.inventario.inventario1.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Usuario findByCorreoAndContrasena(String correo, String contrasena);
}
