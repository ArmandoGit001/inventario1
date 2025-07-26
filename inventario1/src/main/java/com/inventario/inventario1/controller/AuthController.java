package com.inventario.inventario1.controller;

import com.inventario.inventario1.model.Usuario;
import com.inventario.inventario1.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")

public class AuthController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        Usuario usuario = usuarioService.login(username, password);
        if (usuario != null) {
            return "Login correcto. Rol: " + usuario.getRol();
        } else {
            return "Usuario o contraseña incorrectos.";
        }
    }
    
}
