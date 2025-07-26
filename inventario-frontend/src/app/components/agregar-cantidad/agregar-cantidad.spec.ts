import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCantidad } from './agregar-cantidad';

describe('AgregarCantidad', () => {
  let component: AgregarCantidad;
  let fixture: ComponentFixture<AgregarCantidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarCantidad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarCantidad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
