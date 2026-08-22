import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const isValiado = localStorage.getItem('token') !== null;

  if (isValiado) {
    return true;
  } else {
    router.navigate(['/login']);
    return false
  }

};
