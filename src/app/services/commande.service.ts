import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande, Commandes } from '../entities/commande';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { Plat } from '../entities/plat';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {



  private _commandeIdSubject: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);

  public get commandeId$(): Observable<number | null> {
    return this._commandeIdSubject.asObservable();
  }

  public setCommandeId(commandeId: number): void {
    this._commandeIdSubject.next(commandeId);
  }

public commandeOuverte!: Commande;
  constructor(private httpClient : HttpClient) { }

  public ouvertureCommande(idClient: number, idTable: number){
    
    const params = new HttpParams()
    .set('id_client', idClient.toString())
    .set('id_table', idTable.toString());

   
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

    public getCommandeById(id:number): Observable<Commande> | undefined {
    
      return this.httpClient.get<Commande>('http://localhost:8080/commandes/'+id).pipe(
        map((commande: Commande) => {
         
         return commande;
        }),
        catchError(e => {
          console.error(e);
  
          return of();
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

