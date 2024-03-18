import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesDeBiereComponent } from './types-de-biere.component';

describe('TypesDeBiereComponent', () => {
  let component: TypesDeBiereComponent;
  let fixture: ComponentFixture<TypesDeBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesDeBiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypesDeBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
