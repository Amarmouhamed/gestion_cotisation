import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrePeriodeComponent } from './parametre-periode.component';

describe('ParametrePeriodeComponent', () => {
  let component: ParametrePeriodeComponent;
  let fixture: ComponentFixture<ParametrePeriodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrePeriodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametrePeriodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
