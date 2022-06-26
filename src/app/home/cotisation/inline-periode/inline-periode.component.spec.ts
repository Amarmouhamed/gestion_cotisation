import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinePeriodeComponent } from './inline-periode.component';

describe('InlinePeriodeComponent', () => {
  let component: InlinePeriodeComponent;
  let fixture: ComponentFixture<InlinePeriodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinePeriodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinePeriodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
