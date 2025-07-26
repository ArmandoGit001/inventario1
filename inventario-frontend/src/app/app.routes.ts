import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Inventario } from './components/inventario/inventario';

export const routes: Routes = [
    { path: '', component: Login }, // ruta principal
    { path: 'inventario', component: Inventario },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
