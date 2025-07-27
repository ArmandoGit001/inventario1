import { Component } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar';
import { FormsModule } from '@angular/forms';
import { ProductoService, Producto } from '../../services/producto.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-salida-producto',
  imports: [
    Toolbar,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NgIf],
  templateUrl: './salida-producto.html',
  styleUrl: './salida-producto.scss'
})

export class SalidaProducto {
  productoId: number = 0;
  cantidad: number = 1;
  error = '';
  success = '';

  constructor(
    private productoService: ProductoService,
  ) {}

  registrarSalida() {
    if (this.productoId <= 0 || this.cantidad <= 0) {
      this.error = 'Debes ingresar un ID válido y una cantidad mayor a 0.';
      return;
    }

    this.productoService.sacarDelInventario(this.productoId, this.cantidad).subscribe({
      next: () => {
        this.success = 'Salida registrada correctamente.';
      },
      error: () => {
        this.error = 'Error al registrar la salida. Verifica el ID y stock.';
      }
    });
  }

}
