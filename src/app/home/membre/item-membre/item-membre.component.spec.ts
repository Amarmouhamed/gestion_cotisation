import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMembreComponent } from './item-membre.component';

describe('ItemMembreComponent', () => {
  let component: ItemMembreComponent;
  let fixture: ComponentFixture<ItemMembreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMembreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
