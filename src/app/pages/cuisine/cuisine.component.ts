import {Component, Input} from '@angular/core';
import {CuisineService} from "../../services/cuisine.service";
import {Observable, of, Subscription} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {PlatService} from "../../services/plat.service";
import {Commande, Commandes} from "../../entities/commande";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cuisine',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './cuisine.component.html',
  styleUrl: './cuisine.component.scss'
})
export class CuisineComponent {

  public commandes$: Observable<Commande[]>;


  constructor(private cuisineService: CuisineService, private platService: PlatService) {
    this.commandes$ = this.platService.getAllCommandes();

  }

  public modifStatut(statut: string, id: number,  commande: Commande): void {
    this.cuisineService.modifierStatutCommande(statut, id).subscribe({
      next: (commandeModifiee) => {
        console.log('Commande mise à jour avec succès:', commandeModifiee);
        commande.etatCommande= "PRETE";
      }
    });

  }
}


