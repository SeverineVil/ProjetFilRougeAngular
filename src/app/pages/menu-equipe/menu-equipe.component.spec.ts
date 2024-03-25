import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEquipeComponent } from './menu-equipe.component';

describe('MenuEquipeComponent', () => {
  let component: MenuEquipeComponent;
  let fixture: ComponentFixture<MenuEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEquipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
