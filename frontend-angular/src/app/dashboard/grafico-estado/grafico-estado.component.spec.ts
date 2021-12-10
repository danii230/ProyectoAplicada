import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoEstadoComponent } from './grafico-estado.component';

describe('GraficoEstadoComponent', () => {
  let component: GraficoEstadoComponent;
  let fixture: ComponentFixture<GraficoEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoEstadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
