import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCotisationNonEncaisseeComponent } from './item-cotisation-non-encaissee.component';

describe('ItemCotisationNonEncaisseeComponent', () => {
  let component: ItemCotisationNonEncaisseeComponent;
  let fixture: ComponentFixture<ItemCotisationNonEncaisseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCotisationNonEncaisseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCotisationNonEncaisseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
