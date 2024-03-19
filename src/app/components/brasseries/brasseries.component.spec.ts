import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasseriesComponent } from './brasseries.component';

describe('BrasseriesComponent', () => {
  let component: BrasseriesComponent;
  let fixture: ComponentFixture<BrasseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrasseriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrasseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
