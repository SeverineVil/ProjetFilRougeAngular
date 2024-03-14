import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapDemosComponent } from './bootstrap-demos.component';

describe('BootstrapDemosComponent', () => {
  let component: BootstrapDemosComponent;
  let fixture: ComponentFixture<BootstrapDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapDemosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
