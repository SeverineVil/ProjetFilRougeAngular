import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Reservation } from '../entities/reservations';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private httpClient: HttpClient) {}

  public getAllResa(): Observable<Reservation[]> {
    return this.httpClient
      .get<Reservation[]>('http://localhost:8080/reservations')
      .pipe(
        map((reservations: Reservation[]) => {
          if (reservations == null) {
            return [];
          }
          return reservations;
        }),
        catchError((e) => {
          console.error(e);
          return of([]);
        })
      );
  }
 
  
}
