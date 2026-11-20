import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarTurno } from './sacar-turno';

describe('SacarTurno', () => {
  let component: SacarTurno;
  let fixture: ComponentFixture<SacarTurno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SacarTurno],
    }).compileComponents();

    fixture = TestBed.createComponent(SacarTurno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
