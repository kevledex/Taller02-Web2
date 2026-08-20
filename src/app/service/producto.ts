import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
