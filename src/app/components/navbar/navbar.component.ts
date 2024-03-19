import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuRoute } from './menu-route';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public menuRoutes: IMenuRoute[] = [
    { path: 'hello-world', libelle: 'Hello World' },
    { path: 'exercices', libelle: 'Exercices' },
    { path: 'types-de-biere', libelle: 'Types de bières' },
    { path: 'brasseries', libelle: 'Brasseries' }
  ]
}
