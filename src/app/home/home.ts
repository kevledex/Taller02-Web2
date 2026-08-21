import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto, traducirCategoria } from '../service/producto';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private productoService = inject(Producto);

  private todos = signal<any[]>([]);

  categorias = computed(() => {
    const mapa = new Map<string, { nombre: string; imagen: string; cantidad: number }>();

    for (const producto of this.todos()) {
      const existente = mapa.get(producto.category);
      if (existente) {
        existente.cantidad++;
      } else {
        mapa.set(producto.category, { nombre: traducirCategoria(producto.category), imagen: producto.image, cantidad: 1 });
      }
    }

    return Array.from(mapa.values());
  });

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe((data) => {
      this.todos.set(data);
    });
  }
}
