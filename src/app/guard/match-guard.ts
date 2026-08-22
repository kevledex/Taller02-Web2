import { CanMatchFn } from '@angular/router';

export const matchGuard: CanMatchFn = (route, segments) => {
  const esValido = localStorage.getItem('token') !== null;
  return esValido;
};
