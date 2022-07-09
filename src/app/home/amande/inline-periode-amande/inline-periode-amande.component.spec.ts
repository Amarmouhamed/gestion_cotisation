import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinePeriodeAmandeComponent } from './inline-periode-amande.component';

describe('InlinePeriodeAmandeComponent', () => {
  let component: InlinePeriodeAmandeComponent;
  let fixture: ComponentFixture<InlinePeriodeAmandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinePeriodeAmandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinePeriodeAmandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
