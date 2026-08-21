import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Producto } from '../../service/producto';

@Component({
  selector: 'app-productos',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  private productoService = inject(Producto);

  productos = signal<any[]>([]);

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos.set(data);
    });
  }
}
