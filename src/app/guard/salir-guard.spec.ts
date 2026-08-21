import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { SolicitudProducto } from '../solicitud-producto/solicitud-producto';

import { salirGuard } from './salir-guard';

describe('salirGuard', () => {
  const executeGuard: CanDeactivateFn<SolicitudProducto> = (...guardParameters) =>
      TestBed.runInInjectionContext(() => salirGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
