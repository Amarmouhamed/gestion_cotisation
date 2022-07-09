import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinePeriodePreviewComponent } from './inline-periode-preview.component';

describe('InlinePeriodePreviewComponent', () => {
  let component: InlinePeriodePreviewComponent;
  let fixture: ComponentFixture<InlinePeriodePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlinePeriodePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinePeriodePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
