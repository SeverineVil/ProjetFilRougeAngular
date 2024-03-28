import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CuisineService {

  private commande?: string;


  constructor(private httpClient: HttpClient) { }
 /* public recupereLaListeDeCommandes(): Observable<boolean>{
    return this.httpClient.get<boolean>('http://localhost:8080/commandes').pipe(
      map((commandes: Commande[]) => {

        if (commandes == null) {
          return [];
        }
        return commandes;
      })
    );
  }*/




}
