import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Users } from './entities/users';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {
  logObj: Users = { id: 0, identifiant: '', mdp: '', token: '' };

  constructor(private router: Router, private loginService: LoginService) {}

  public onLogin(): void {
    this.loginService.login(this.logObj).subscribe(() => {
      this.router.navigateByUrl('menu-equipe');
    });
  }
}
