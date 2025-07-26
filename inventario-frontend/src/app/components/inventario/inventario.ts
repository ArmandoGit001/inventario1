import { Component, OnInit } from '@angular/core';
import { ProductoService, Producto } from '../../services/producto.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AgregarProducto } from '../agregar-producto/agregar-producto';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AgregarCantidad } from '../agregar-cantidad/agregar-cantidad';
import { Toolbar } from "../toolbar/toolbar";

@Component({
  selector: 'app-inventario',
  imports: [MatButtonModule, MatCardModule, MatTableModule, CommonModule, MatIconModule, MatDialogModule, Toolbar],
  templateUrl: './inventario.html',
  styleUrl: './inventario.scss'
})
export class Inventario implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.productoService.obtenerProductosActivos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al obtener productos:', err)
    });
    this.cargarProductosInactivos();
  }

  obtenerProductos(): void {
    this.productoService.obtenerProductosActivos().subscribe({
      next: (data) => this.productos = data,
      error: (err) => console.error('Error al obtener productos:', err)
    });
  }

  darDeBaja(id_producto: number): void {
    if (confirm('¿Estás seguro de dar de baja este producto?')) {
      this.productoService.darDeBaja(id_producto).subscribe(() => {
        // Vuelve a cargar los productos activos
        this.obtenerProductos();
      });
    }
  }

  abrirDialogoAgregar(): void {
    const dialogRef = this.dialog.open(AgregarProducto);
  
    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado === true) {
        this.obtenerProductos(); // recargar la tabla
      }
    });
  }

  //Sección para productos INACTIVOS
  productosInactivos: Producto[] = [];

  cargarProductosInactivos() {
    this.productoService.obtenerProductosInactivos().subscribe({
      next: (data) => this.productosInactivos = data,
      error: (err) => console.error('Error al obtener inactivos:', err)
    });
  }

  reactivar(id_producto: number): void {
    if (confirm('¿Deseas reactivar este producto?')) {
      this.productoService.reactivarProducto(id_producto).subscribe(() => {
        this.cargarProductosInactivos();
        this.obtenerProductos(); // recargar activos también
      });
    }
  }

  //SUMAR INVENTARIO:

  abrirDialogoAgregarCantidad(producto: Producto): void {
    const dialogRef = this.dialog.open(AgregarCantidad, {
      data: { idProducto: producto.id_producto, nombre: producto.nombre },
    });
  
    dialogRef.afterClosed().subscribe((cantidad: number) => {
      if (cantidad && cantidad > 0) {
        this.productoService.agregarCantidad(producto.id_producto, cantidad).subscribe(() => {
          this.obtenerProductos(); // Recargar inventario
        });
      }
    });
  }


}
