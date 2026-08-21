import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Login } from './login/login';
import { SolicitudProducto } from './solicitud-producto/solicitud-producto';
import { Catalogo } from './catalogo/catalogo';
import { CatalogoPreview } from './catalogo-preview/catalogo-preview';
import { MiCuenta } from './mi-cuenta/mi-cuenta';
import { Productos } from './admin/productos/productos';
import { Reportes } from './admin/reportes/reportes';

import { authGuard } from './guard/auth-guard';
import { matchGuard } from './guard/match-guard';
import { salirGuard } from './guard/salir-guard';
import { childGuard } from './guard/child-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'login', component: Login },

  { path: 'solicitud-producto', component: SolicitudProducto, canDeactivate: [salirGuard] },

  { path: 'catalogo', component: Catalogo, canMatch: [matchGuard] },
  { path: 'catalogo', component: CatalogoPreview },

  { path: 'mi-cuenta', component: MiCuenta, canActivate: [authGuard] },

  {
    path: 'admin',
    canActivateChild: [childGuard],
    children: [
      { path: 'productos', component: Productos },
      { path: 'reportes', component: Reportes },
    ],
  },

  { path: '**', redirectTo: '' },
];
