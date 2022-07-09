import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAmandeNonEncaisseeComponent } from './item-amande-non-encaissee.component';

describe('ItemAmandeNonEncaisseeComponent', () => {
  let component: ItemAmandeNonEncaisseeComponent;
  let fixture: ComponentFixture<ItemAmandeNonEncaisseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAmandeNonEncaisseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAmandeNonEncaisseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
