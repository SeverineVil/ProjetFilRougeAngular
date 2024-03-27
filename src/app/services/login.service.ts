import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../entities/users';
import { map } from 'rxjs';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private static readonly _tokenStorageKey = 'token';

  constructor(
    private HttpClient: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) {}

  public login(user: Users) {
    const params = new HttpParams()
      .set('username', user.identifiant)
      .set('password', user.mdp);

    return this.HttpClient.post<any>(
      'http://localhost:8080/login',
      {},
      { params }
    ).pipe(
      map((response) => {
        console.log('Token du user :', response.token);
        const token = response.token;

        this.storageService.set(LoginService._tokenStorageKey, token);
        return token;
      })
    );
  }

  public interceptToken(): string | null {
    return this.storageService.get(LoginService._tokenStorageKey);
  }

  public logout(): void {
    this.storageService.delete(LoginService._tokenStorageKey);
    this.router.navigateByUrl('/');
  }
}
