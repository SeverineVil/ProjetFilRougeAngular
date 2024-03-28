import { Injectable } from '@angular/core';
import { Plat, Plats } from '../entities/plat';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Commande, Commandes } from '../entities/commande';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  private id_Client : number = 1;

  private id_Table : number = 1;

  public commandeOuverte!: Commande;
  
  constructor(private httpClient: HttpClient) { 
  }

  public ouvertureCommande(){
    
    const params = new HttpParams()
    .set('id_client', this.id_Client)
    .set('id_table', this.id_Table);

   
   this.httpClient.post<Commande>('http://localhost:8080/commandes',{},{params}).subscribe(
      result => {
        this.commandeOuverte = result;
        console.log(this.commandeOuverte);
      }
   );
  }

  public getAllCommandes(): Observable<Commandes> {
    
    return this.httpClient.get<Commandes>('http://localhost:8080/commandes').pipe(
      map((commandes: Commandes) => {

        if (commandes == null) {
          return [];
        }
        return commandes;
      }),
      catchError(e => {
        console.error(e);

        return of([]);
      })
    )

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

  public ajouterPlatCommande(plat: Plat ): void {

    const params = new HttpParams()
    .set('id_commande', this.commandeOuverte.id!)
    .set('id_plat', plat.id);

    
    this.httpClient.put<void>('http://localhost:8080/commandes/id',{},{params: params}).subscribe(
      
    );

  }
}


