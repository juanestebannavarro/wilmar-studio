import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarTurno } from './consultar-turno';

describe('ConsultarTurno', () => {
  let component: ConsultarTurno;
  let fixture: ComponentFixture<ConsultarTurno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarTurno],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultarTurno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
