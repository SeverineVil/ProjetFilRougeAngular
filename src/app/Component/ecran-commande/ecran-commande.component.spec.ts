import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcranCommandeComponent } from './ecran-commande.component';

describe('EcranCommandeComponent', () => {
  let component: EcranCommandeComponent;
  let fixture: ComponentFixture<EcranCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcranCommandeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcranCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
