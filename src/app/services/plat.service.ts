import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Commande } from '../entities/commande';
import { Plat } from '../entities/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  public commandeOuverte!: Commande;
  
  constructor(private httpClient: HttpClient) { 
  }
  public getAllPlats(): Observable<Plat[]>{

    return this.httpClient.get<Plat[]>('http://localhost:8080/plats').pipe(
      map((plats: Plat[]) => {

        if (plats == null) {
          return [];
        }
        return plats;
      }),
      catchError(e => {
        console.error(e);
        return of([]);
      })
    )
  }

}


