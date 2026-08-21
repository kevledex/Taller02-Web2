import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const TRADUCCIONES_CATEGORIA: Record<string, string> = {
  "men's clothing": 'Hombre',
  "women's clothing": 'Mujer',
  'jewelery': 'Joyería',
  'electronics': 'Electrónica'
};

export function traducirCategoria(categoria: string): string {
  return TRADUCCIONES_CATEGORIA[categoria] ?? categoria;
}

@Injectable({
  providedIn: 'root',
})
export class Producto {

  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/products';

  obtenerProductos() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
