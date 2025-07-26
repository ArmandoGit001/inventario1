import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
  estatus: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:8080/productos/activos';

  constructor(private http: HttpClient) {}

  obtenerProductosActivos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
