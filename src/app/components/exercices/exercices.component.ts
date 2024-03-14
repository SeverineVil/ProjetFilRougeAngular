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
}
