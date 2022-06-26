import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphEvolutionMontantGlobalComponent } from './graph-evolution-montant-global.component';

describe('GraphEvolutionMontantGlobalComponent', () => {
  let component: GraphEvolutionMontantGlobalComponent;
  let fixture: ComponentFixture<GraphEvolutionMontantGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphEvolutionMontantGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphEvolutionMontantGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
