import { Injectable } from '@angular/core';
import { Plat, Plats } from '../entities/plat';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatService {


  constructor(private httpClient: HttpClient) { }

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

  public ajouterPlat(id: number): void {

    
  }

}


