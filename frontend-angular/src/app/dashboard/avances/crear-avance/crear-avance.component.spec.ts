import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAvanceComponent } from './crear-avance.component';

describe('CrearAvanceComponent', () => {
  let component: CrearAvanceComponent;
  let fixture: ComponentFixture<CrearAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
