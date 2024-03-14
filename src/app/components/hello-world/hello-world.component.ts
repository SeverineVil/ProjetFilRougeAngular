import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {
  public now: Date = new Date();

  public nowAsString: string = new Date().toLocaleDateString();
}
