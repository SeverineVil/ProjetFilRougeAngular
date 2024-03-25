import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../entities/users';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  public login(user: Users){
   
    let params = new HttpParams()
      .set('username', user.identifiant)
      .set('password', user.mdp);
  

  return this.HttpClient.post<any>('http://localhost:8080/login', {}, { params }).pipe(
      map(r => {
        console.log("Token du user :", r.token);
        return r.token; 
      })
    ); 
  }
}