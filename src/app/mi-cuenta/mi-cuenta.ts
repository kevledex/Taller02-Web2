import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../service/auth';

@Component({
  selector: 'app-mi-cuenta',
  imports: [],
  templateUrl: './mi-cuenta.html',
  styleUrl: './mi-cuenta.css',
})
export class MiCuenta {

  private auth = inject(Auth);
  private router = inject(Router);

  usuario = this.auth.estadoLogueado();

  salir() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
