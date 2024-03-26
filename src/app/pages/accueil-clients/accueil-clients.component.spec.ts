import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilClientsComponent } from './accueil-clients.component';

describe('AccueilClientsComponent', () => {
  let component: AccueilClientsComponent;
  let fixture: ComponentFixture<AccueilClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
