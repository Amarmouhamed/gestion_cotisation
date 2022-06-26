import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotisationMoisComponent } from './cotisation-mois.component';

describe('CotisationMoisComponent', () => {
  let component: CotisationMoisComponent;
  let fixture: ComponentFixture<CotisationMoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotisationMoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotisationMoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
