import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule,MatInputModule, FormsModule, MatButtonModule, CommonModule, MatCardModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  correo = '';
  contrasena = '';
  mensaje = '';

  constructor(private http: HttpClient, private router: Router, private SesionService: SesionService) {}

  login() {
    const params = { correo: this.correo, contrasena: this.contrasena };

    this.http.post<any>('http://localhost:8080/auth/login', params).subscribe({
      next: (data) => {
        if(data.id_usuario) {
          this.SesionService.setId_usuario(data.id_usuario);
          this.SesionService.setId_rol(data.rol);
        }
        this.router.navigate(['/inventario']);
      },
      error: (err) => {
        this.mensaje = err.error?.error || 'Error al iniciar sesión';
      }
    });
  }

}
