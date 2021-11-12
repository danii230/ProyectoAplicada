import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSexoComponent } from './editar-sexo.component';

describe('EditarSexoComponent', () => {
  let component: EditarSexoComponent;
  let fixture: ComponentFixture<EditarSexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSexoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
