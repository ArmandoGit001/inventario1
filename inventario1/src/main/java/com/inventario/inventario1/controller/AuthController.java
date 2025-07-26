package com.inventario.inventario1.controller;

import com.inventario.inventario1.model.Usuario;
import com.inventario.inventario1.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")  // para las peticiones desde Angular

public class AuthController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> datos) {

        String correo = datos.get("correo");
        String contrasena = datos.get("contrasena");

        Usuario usuario = usuarioService.login(correo, contrasena);
        if (usuario != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Login correcto");
            response.put("rol", usuario.getRol());
            response.put("id_usuario", usuario.getId_usuario()); 
            return ResponseEntity.ok(response);
        } else {
            Map<String, String> error = new HashMap<>();
            error.put("error", "Usuario o contrasena incorrectos.");
            return ResponseEntity.status(401).body(error);
        }
    }
    
}
