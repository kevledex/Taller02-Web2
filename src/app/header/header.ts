import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../service/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  auth = inject(Auth);

  menuAbierto = signal(false);

  alternarMenu() {
    this.menuAbierto.update(valor => !valor);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }
}
