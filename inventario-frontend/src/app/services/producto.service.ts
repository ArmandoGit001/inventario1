import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

export interface Producto {
  id_producto: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
  estatus: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient, private sesionService: SesionService) {}

  obtenerProductosActivos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/activos`);
  }

  darDeBaja(id_producto: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id_producto}/baja`, {});
  }

  agregarProducto(producto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, producto); 
  }

  //dar de baja y reactivar productos:
  obtenerProductosInactivos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/inactivos`);
  }
  
  reactivarProducto(id_producto: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id_producto}/reactivar`, {});
  }

  //Aumentar inventario
  agregarCantidad(id_producto: number, cantidad: number): Observable<any> {
    const id_usuario = this.sesionService.getId_usuario();
    return this.http.put(`${this.baseUrl}/${id_producto}/entradas`, { cantidad, id_usuario });
  }
  //restar inventario
  sacarDelInventario(id_producto: number, cantidad: number): Observable<any> {
    const id_usuario = this.sesionService.getId_usuario();
    return this.http.put(`${this.baseUrl}/${id_producto}/salidas`, { cantidad, id_usuario });
  }

}
