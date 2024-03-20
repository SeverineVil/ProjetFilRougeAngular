import { Component } from '@angular/core';
import { HelloWorldComponent } from '../hello-world/hello-world.component';
import { SliderComponent } from '../../core/components/slider/slider.component';
import { ProgressBarComponent } from '../../core/components/progress-bar/progress-bar.component';
import { BootstrapDemosComponent } from '../bootstrap-demos/bootstrap-demos.component';
import { AlertComponent } from '../../core/components/alert/alert.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighLightDirective } from '../../directives/high-light.directive';
import { MajusculeUneSurXPipe } from '../../pipes/majuscule-une-sur-x.pipe';

@Component({
  selector: 'app-exercices',
  standalone: true,
  imports: [
    HelloWorldComponent,
    SliderComponent,
    ProgressBarComponent,
    BootstrapDemosComponent,
    AlertComponent,
    FormsModule,
    NgbAlertModule,
    CommonModule,
    HighLightDirective,
    MajusculeUneSurXPipe],
  templateUrl: './exercices.component.html',
  styleUrl: './exercices.component.scss'
})
export class ExercicesComponent {

  public v1 = 10;
  public v2: number = 0;
  public v3 = 0;

  public loading: boolean = true;

  // Tableau d'objets, qui ont une propriété "n" de type number
  public values: { n: number }[] = Array(3);

  public inputValue: string = '';

  constructor() {

    // SetInterval sur le tableau
    setInterval(() => {
      this.setRandomValues();
    }, 500);

    this.setRandomValues()

    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  private setRandomValues(): void {
    // Boucle sur i allant de 0 juqu'à la taille du tableau
    for (let i = 0; i < this.values.length; i++) {

      // Mise à jour de la propriété "n" de l'élément à l'index "i"
      this.values[i] = { n: Math.random() * 100 };
    }
  }

  public alertWasClosed(): void {
    setInterval(() => {
      this.v1 = Math.random() * 100;
      this.v2 = Math.random() * 100;
      this.v3 = Math.random() * 100;
    }, 500);
    console.log('alert was closed');
    alert('alert was closed!');
  }
}
