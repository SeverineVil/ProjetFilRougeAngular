import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateBrasserieComponent } from './create-update-brasserie.component';

describe('CreateUpdateBrasserieComponent', () => {
  let component: CreateUpdateBrasserieComponent;
  let fixture: ComponentFixture<CreateUpdateBrasserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateUpdateBrasserieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateUpdateBrasserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
