import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudProducto } from './solicitud-producto';

describe('SolicitudProducto', () => {
  let component: SolicitudProducto;
  let fixture: ComponentFixture<SolicitudProducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudProducto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudProducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
