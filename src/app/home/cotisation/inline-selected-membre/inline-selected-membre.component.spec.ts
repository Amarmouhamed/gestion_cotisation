import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineSelectedMembreComponent } from './inline-selected-membre.component';

describe('InlineSelectedMembreComponent', () => {
  let component: InlineSelectedMembreComponent;
  let fixture: ComponentFixture<InlineSelectedMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineSelectedMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineSelectedMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
