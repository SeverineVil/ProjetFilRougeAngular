import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateTypeDeBiereComponent } from './create-update-type-de-biere.component';

describe('CreateUpdateTypeDeBiereComponent', () => {
  let component: CreateUpdateTypeDeBiereComponent;
  let fixture: ComponentFixture<CreateUpdateTypeDeBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateTypeDeBiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateTypeDeBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
