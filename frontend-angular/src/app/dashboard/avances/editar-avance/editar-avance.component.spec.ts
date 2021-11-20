import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAvanceComponent } from './editar-avance.component';

describe('EditarAvanceComponent', () => {
  let component: EditarAvanceComponent;
  let fixture: ComponentFixture<EditarAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
