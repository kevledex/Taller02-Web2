import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto, traducirCategoria } from '../service/producto';

@Component({
  selector: 'app-catalogo-preview',
  imports: [RouterLink],
  templateUrl: './catalogo-preview.html',
  styleUrl: './catalogo-preview.css',
})
export class CatalogoPreview {

  private productoService = inject(Producto);

  protected traducirCategoria = traducirCategoria;

  productos = signal<any[]>([]);

  categorias = computed(() => {
    const nombres = this.productos().map(p => p.category);
    return Array.from(new Set(nombres));
  });

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos.set(data);
    });
  }

  productosPorCategoria(categoria: string) {
    return this.productos().filter(p => p.category === categoria);
  }

  desplazar(event: Event, direccion: number) {
    const boton = event.currentTarget as HTMLElement;
    const carrusel = boton.closest('.carrusel-wrapper')?.querySelector('.carrusel') as HTMLElement | null;
    if (!carrusel) {
      return;
    }

    const maximoScroll = carrusel.scrollWidth - carrusel.clientWidth;

    if (direccion > 0 && carrusel.scrollLeft >= maximoScroll - 10) {
      carrusel.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    if (direccion < 0 && carrusel.scrollLeft <= 10) {
      carrusel.scrollTo({ left: maximoScroll, behavior: 'smooth' });
      return;
    }

    carrusel.scrollBy({ left: direccion * 300, behavior: 'smooth' });
  }
}
