import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Inventario } from './components/inventario/inventario';
import { SalidaProducto } from './components/salida-producto/salida-producto';
import { Movimientos } from './components/movimientos/movimientos';

export const routes: Routes = [
    { path: '', component: Login }, // ruta principal
    { path: 'inventario', component: Inventario },
    { path: 'salida', component: SalidaProducto },
    { path: 'historial', component: Movimientos },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
