import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PlatService} from "./plat.service";
import {Commande} from "../entities/commande";
import {Observable} from "rxjs";
import {CommandeService} from "./commande.service";

@Injectable({
  providedIn: 'root'
})
export class CuisineService {




  constructor(private httpClient: HttpClient, private service : CommandeService) {
    this.service.getAllCommandes();
  }

  public modifierStatutCommande(statut: string, id: number): Observable<Commande> {
    const url = `http://localhost:8080/commandes/statut/${id}`;
    let params = new HttpParams().set('newStatut', statut);

    return this.httpClient.put<Commande>(url, {}, { params: params });
  }





}
