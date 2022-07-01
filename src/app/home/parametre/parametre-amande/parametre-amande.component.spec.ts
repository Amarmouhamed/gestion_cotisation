import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreAmandeComponent } from './parametre-amande.component';

describe('ParametreAmandeComponent', () => {
  let component: ParametreAmandeComponent;
  let fixture: ComponentFixture<ParametreAmandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametreAmandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreAmandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
