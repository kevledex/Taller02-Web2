import { Component, computed, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Producto } from '../../service/producto';

@Component({
  selector: 'app-reportes',
  imports: [DecimalPipe, RouterLink, RouterLinkActive],
  templateUrl: './reportes.html',
  styleUrl: './reportes.css',
})
export class Reportes {

  private productoService = inject(Producto);

  productos = signal<any[]>([]);

  totalProductos = computed(() => this.productos().length);
  totalStock = computed(() => this.productos().reduce((total, p) => total + p.rating.count, 0));
  valorInventario = computed(() => this.productos().reduce((total, p) => total + p.price * p.rating.count, 0));

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos.set(data);
    });
  }
}
