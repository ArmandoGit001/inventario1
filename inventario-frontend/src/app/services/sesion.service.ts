import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private idUsuario: number = 0;
  private idRol: number = 2;

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

  setId_rol(idr: number){
    this.idRol = idr;
    localStorage.setItem('rol', idr.toString());
  }

  getId_rol(): number {
    if (this.idRol) return this.idRol;
    const stored2 = localStorage.getItem('rol');
    return stored2 ? Number(stored2) : 0;
  }

}
