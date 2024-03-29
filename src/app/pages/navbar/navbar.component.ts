import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

 

  constructor(private location: Location, private loginService: LoginService){}

  public goBack(): void {
    this.location.back();
  }

  public logout(): void {
    this.loginService.logout();
  }

}
