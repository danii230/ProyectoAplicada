import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesFechasComponent } from './solicitudes-fechas.component';

describe('SolicitudesFechasComponent', () => {
  let component: SolicitudesFechasComponent;
  let fixture: ComponentFixture<SolicitudesFechasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesFechasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
