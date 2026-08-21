import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Empresa {
  obtenerInformacion() {
    return {
      titulo: 'Quiénes somos',
      descripcion: 'Creemos en un mundo donde tengas total libertad para ser tú mismo, sin prejuicios. Para experimentar. Para expresarte. Para ser valiente y vivir la vida como la extraordinaria aventura que es. Por eso, nos aseguramos de que todos tengan la misma oportunidad de descubrir todo su potencial, sin importar quiénes sean, de dónde vengan o qué imagen les guste proyectar. Existimos para darte la confianza de ser quien quieras ser.',
      imagen: 'https://i.postimg.cc/tJryK2KQ/Nosotros1.jpg',
      alt: 'Chica posando'
    };
  }
}
