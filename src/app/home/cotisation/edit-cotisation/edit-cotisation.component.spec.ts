import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCotisationComponent } from './edit-cotisation.component';

describe('EditCotisationComponent', () => {
  let component: EditCotisationComponent;
  let fixture: ComponentFixture<EditCotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCotisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
