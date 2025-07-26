package com.inventario.inventario1.service;

import com.inventario.inventario1.model.Producto;
import com.inventario.inventario1.model.Usuario;
import com.inventario.inventario1.repository.UsuarioRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario login(String correo, String contrasena) {
        Usuario usuario = usuarioRepository.findByCorreoAndContrasena(correo,contrasena);
        if (usuario != null && usuario.getContrasena().equals(contrasena)) {
            return usuario;
        }
        return null;
    }

    public Optional<Usuario> obtenerPorId(Integer id) {
        return usuarioRepository.findById(id);
    }
}
