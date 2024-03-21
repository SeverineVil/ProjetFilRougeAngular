import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStructuralDirectivesComponent } from './new-structural-directives.component';

describe('NewStructuralDirectivesComponent', () => {
  let component: NewStructuralDirectivesComponent;
  let fixture: ComponentFixture<NewStructuralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewStructuralDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewStructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
