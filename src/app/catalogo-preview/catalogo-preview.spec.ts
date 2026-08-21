import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoPreview } from './catalogo-preview';

describe('CatalogoPreview', () => {
  let component: CatalogoPreview;
  let fixture: ComponentFixture<CatalogoPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
