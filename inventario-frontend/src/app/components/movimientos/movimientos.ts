import { Component,OnInit } from '@angular/core';
import { Toolbar } from '../toolbar/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MovimientoService } from '../../services/movimiento.service';
import { DatePipe } from '@angular/common';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

export interface Movimiento {
  id_movimiento: number;
  id_producto: number;
  id_usuario: number;
  id_tipo: number;
  cantidad: number;
  fecha: string;
}

@Component({
  selector: 'app-movimientos',
  imports: [Toolbar,HttpClientModule, MatTableModule, MatCardModule, DatePipe, MatFormField, MatLabel, MatInputModule],
  templateUrl: './movimientos.html',
  styleUrl: './movimientos.scss'
})

export class Movimientos implements OnInit {
  movimientos = new MatTableDataSource<Movimiento>();
  columnas: string[] = ['id_movimiento', 'id_producto', 'id_usuario', 'id_tipo', 'cantidad', 'fecha'];

  tipoMovimientoMap: { [key: number]: string } = {
    1: 'Entrada',
    2: 'Salida'
  };

  constructor(private movimientoService: MovimientoService) {}

  ngOnInit(): void {
    this.movimientoService.getMovimientos().subscribe({
      next: (data) => {
        this.movimientos.data = data;
      },
      error: (err) => console.error('Error al obtener movimientos:', err)
    });
  }

  filtrarPorTipo(event: Event): void {
    const valor = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.movimientos.filterPredicate = (data, filter) =>
      data.id_tipo.toString().includes(filter);
    this.movimientos.filter = valor;
  }

  getNombreTipo(id_tipo: number): string {
    return this.tipoMovimientoMap[id_tipo] || 'Desconocido';
  }
}