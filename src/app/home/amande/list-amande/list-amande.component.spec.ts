import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAmandeComponent } from './list-amande.component';

describe('ListAmandeComponent', () => {
  let component: ListAmandeComponent;
  let fixture: ComponentFixture<ListAmandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAmandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAmandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
