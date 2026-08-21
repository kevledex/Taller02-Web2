import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { Auth } from '../service/auth';

export const childGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.estadoLogueado()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
