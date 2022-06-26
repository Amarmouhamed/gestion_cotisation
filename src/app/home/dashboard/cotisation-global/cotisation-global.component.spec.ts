import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotisationGlobalComponent } from './cotisation-global.component';

describe('CotisationGlobalComponent', () => {
  let component: CotisationGlobalComponent;
  let fixture: ComponentFixture<CotisationGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotisationGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotisationGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
