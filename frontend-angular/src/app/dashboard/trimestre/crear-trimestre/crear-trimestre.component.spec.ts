import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTrimestreComponent } from './crear-trimestre.component';

describe('CrearTrimestreComponent', () => {
  let component: CrearTrimestreComponent;
  let fixture: ComponentFixture<CrearTrimestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTrimestreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTrimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
