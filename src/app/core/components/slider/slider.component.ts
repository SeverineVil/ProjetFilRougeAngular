import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'core-slider',
  standalone: true,
  imports: [MatSliderModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  @Input()
  public value: number = 0;

  @Input()
  public min: number = 0;

  @Input()
  public max: number = 100;

  @Input()
  public showLabel: boolean = true;

  @Output()
  public valueChanged = new EventEmitter<number>();



}
