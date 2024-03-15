import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'core-slider',
  standalone: true,
  imports: [MatSliderModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  @Input()
  public sliderValue?: number; // = 0;

  // En nommant l'output avec "sliderValue" + "Change", l'utilisateur
  // du composant va pouvoir effectuer du binding two way
  @Output()
  public sliderValueChange = new EventEmitter<number>();

  @Output()
  public sliderHasBeenClicked = new EventEmitter<void>();

  @Input()
  public minSliderValue: number = 0;

  @Input()
  public maxSliderValue: number = 100;

  @Input()
  public showLabel: boolean = true;

  /**
   * Méthode appelée lorsque la valeur du mat-input change.
   */
  public sliderValueHasChanged(): void {
    console.log('slider value has changed', this.sliderValue);

    // émission de la valeur courante du slider
    this.sliderValueChange.emit(this.sliderValue);
  }

  public sliderClicked(): void {
    console.log('slider clicked');
    this.sliderHasBeenClicked.emit();
  }

  public sliderMouseOvered(): void {
    console.log('slider mouse over');
  }



}
