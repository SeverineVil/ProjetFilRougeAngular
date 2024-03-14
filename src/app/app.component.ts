import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExercicesComponent } from './components/exercices/exercices.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExercicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BrewApp';
}
