import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private user = 'admin';
  private contra = '123';

  entrar(usuario: string, contrasenia: string): boolean {
    if (usuario === this.user && contrasenia === this.contra) {
      localStorage.setItem('token', usuario);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    return localStorage.removeItem('token');
  }

  estadoLogueado() {
    return localStorage.getItem('token');
  }

}
