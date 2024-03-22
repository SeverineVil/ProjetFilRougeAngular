import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateBiereComponent } from './create-update-biere.component';

describe('CreateUpdateBiereComponent', () => {
  let component: CreateUpdateBiereComponent;
  let fixture: ComponentFixture<CreateUpdateBiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateBiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateBiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
