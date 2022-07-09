import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCotisationEncaisseeComponent } from './item-cotisation-encaissee.component';

describe('ItemCotisationEncaisseeComponent', () => {
  let component: ItemCotisationEncaisseeComponent;
  let fixture: ComponentFixture<ItemCotisationEncaisseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCotisationEncaisseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCotisationEncaisseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
