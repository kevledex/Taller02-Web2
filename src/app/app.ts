import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Home } from './home/home';
import { Inventario } from './inventario/inventario';
import { MiCuenta } from './mi-cuenta/mi-cuenta';
import { Nosotros } from './nosotros/nosotros';
import { SolicitudProducto } from './solicitud-producto/solicitud-producto';
import { Login } from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Home, Inventario, Login, MiCuenta, Nosotros, SolicitudProducto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-angular04');
}
