import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMembreAmandeComponent } from './item-membre-amande.component';

describe('ItemMembreAmandeComponent', () => {
  let component: ItemMembreAmandeComponent;
  let fixture: ComponentFixture<ItemMembreAmandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMembreAmandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMembreAmandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
