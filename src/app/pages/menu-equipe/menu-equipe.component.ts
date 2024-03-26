import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-menu-equipe',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './menu-equipe.component.html',
  styleUrl: './menu-equipe.component.scss'
})
export class MenuEquipeComponent {

}
