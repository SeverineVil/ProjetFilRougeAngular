import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {IMenuRoute} from "../navbar/menu-route";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-menu-equipe',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink, RouterLinkActive],
  templateUrl: './menu-equipe.component.html',
  styleUrl: './menu-equipe.component.scss'
})
export class MenuEquipeComponent {

  public menuRoutes: IMenuRoute[] = [
    { path: 'accueil clients', libelle: 'ACCUEIL CLIENTS' },
    { path: 'reservation', libelle: 'RESERVATIONS' },
    { path: 'service', libelle: 'SERVICE' },
    { path: 'cuisine', libelle: 'CUISINE' },
    { path: 'caisse', libelle: 'CAISSE' },
  ];





  constructor() {
  }


  public navigateTo() {

  }
}
