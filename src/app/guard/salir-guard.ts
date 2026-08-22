import { CanDeactivateFn } from '@angular/router';
import { SolicitudProducto } from '../solicitud-producto/solicitud-producto';

export const salirGuard: CanDeactivateFn<SolicitudProducto> = (component) => {

  if (component.nosPermiteSalir()) {
    return confirm('Tienes datos sin enviar. ¿Estas seguro que quieres salir?');
  }

  return true;
};
