import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexoComponent } from './sexo.component';

describe('MantenimientoComponent', () => {
  let component: SexoComponent;
  let fixture: ComponentFixture<SexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SexoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
