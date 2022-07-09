import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAmandeEncaisseeComponent } from './item-amande-encaissee.component';

describe('ItemAmandeEncaisseeComponent', () => {
  let component: ItemAmandeEncaisseeComponent;
  let fixture: ComponentFixture<ItemAmandeEncaisseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAmandeEncaisseeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAmandeEncaisseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
