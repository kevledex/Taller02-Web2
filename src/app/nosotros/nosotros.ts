import { Component, inject } from '@angular/core';
import { Empresa } from '../service/empresa';

@Component({
  selector: 'app-nosotros',
  imports: [],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

  private empresaService = inject(Empresa);

  informacion = this.empresaService.obtenerInformacion();
}
