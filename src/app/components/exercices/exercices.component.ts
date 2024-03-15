import { Component } from '@angular/core';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { SliderComponent } from '../../core/components/slider/slider.component';
import { ProgressBarComponent } from '../../core/components/progress-bar/progress-bar.component';
import { BootstrapDemosComponent } from '../bootstrap-demos/bootstrap-demos.component';

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [HelloWorldComponent, SliderComponent, ProgressBarComponent,
    BootstrapDemosComponent],
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.scss'
})
export class ExercicesComponent {

  public v1 = 10;
  public v2: number = 0;
  public v3 = 0;

  constructor() {
    setInterval(() => {
      this.v1 = Math.random() * 100;
      this.v2 = Math.random() * 100;
      this.v3 = Math.random() * 100;
    }, 500);
  }
}
