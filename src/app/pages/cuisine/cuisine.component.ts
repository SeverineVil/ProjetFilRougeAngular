import {Component, Input} from '@angular/core';
import {CuisineService} from "../../services/cuisine.service";
import {Observable, of, Subscription} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {PlatService} from "../../services/plat.service";
import {Commande, Commandes} from "../../entities/commande";
import {FormsModule} from "@angular/forms";
import {CommandeService} from "../../services/commande.service";
import {EcranCommandeComponent} from "../../Component/ecran-commande/ecran-commande.component";

@Component({
  selector: 'app-cuisine',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    FormsModule,
    EcranCommandeComponent
  ],
  templateUrl: './cuisine.component.html',
  styleUrl: './cuisine.component.scss'
})
export class CuisineComponent {

  public commandes$: Observable<Commande[]>;


  constructor(private cuisineService: CuisineService, private service: CommandeService) {
    this.commandes$ = this.service.getAllCommandes();

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


