import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule, Router } from '@angular/router';
import { SesionService } from '../../services/sesion.service'


@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatMenuModule,RouterModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
  rolUsuario: number = 0;
  constructor(private sesionService: SesionService, private router: Router) {}

  cerrarSesion() {
    this.sesionService.clearSession();
    this.router.navigate(['/login']);  
  }

  ngOnInit() {
    this.rolUsuario = this.sesionService.getId_rol();
  }

}
