import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../entities/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  public login(user: Users){
    return this.HttpClient.post<any>('/http://localhost:8080/login', user);
  }
}
