import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraTransaccionesComponent } from './bitacora-transacciones.component';

describe('BitacoraTransaccionesComponent', () => {
  let component: BitacoraTransaccionesComponent;
  let fixture: ComponentFixture<BitacoraTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitacoraTransaccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitacoraTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
