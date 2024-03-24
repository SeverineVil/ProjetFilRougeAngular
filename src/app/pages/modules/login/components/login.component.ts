import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Users } from '../entities/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  logObj: Users = { id: 0, identifiant: '', mdp: '' };

  constructor(private router: Router, private loginService: LoginService) {}

  public onLogin(): void {
    this.loginService.login(this.logObj).subscribe(
      () => {
      
        this.router.navigateByUrl('');
      },
      (error) => {
      
        console.error('Erreur de connexion : ', error);
      }
    );
  }
}