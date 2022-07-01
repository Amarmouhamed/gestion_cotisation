import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRealisationComponent } from './list-realisation.component';

describe('ListRealisationComponent', () => {
  let component: ListRealisationComponent;
  let fixture: ComponentFixture<ListRealisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRealisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRealisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
