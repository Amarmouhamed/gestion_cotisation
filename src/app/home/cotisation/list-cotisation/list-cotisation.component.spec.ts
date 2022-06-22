import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCotisationComponent } from './list-cotisation.component';

describe('ListCotisationComponent', () => {
  let component: ListCotisationComponent;
  let fixture: ComponentFixture<ListCotisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCotisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCotisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
