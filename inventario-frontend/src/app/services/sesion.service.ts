import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private idUsuario: number = 0;

  setId_usuario(id: number) {
    this.idUsuario = id;
    localStorage.setItem('id_usuario', id.toString());
  }

  getId_usuario(): number {
    if (this.idUsuario) return this.idUsuario;
    const stored = localStorage.getItem('id_usuario');
    return stored ? Number(stored) : 0;
  }

  clearSession() {
    this.idUsuario = 0;
    localStorage.removeItem('id_usuario');
  }
}
