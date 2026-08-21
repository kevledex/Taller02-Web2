import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { Auth } from '../service/auth';

export const matchGuard: CanMatchFn = (route, segments) => {
  const auth = inject(Auth);
  return auth.estadoLogueado() !== null;
};
