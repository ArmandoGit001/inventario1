import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movimiento } from '../components/movimientos/movimientos';

@Injectable({
    providedIn: 'root'
})
export class MovimientoService {
    private apiUrl = 'http://localhost:8080/api/movimientos';

    constructor(private http: HttpClient) {}

    getMovimientos(): Observable<Movimiento[]> {
        return this.http.get<Movimiento[]>(this.apiUrl);
    }
}
