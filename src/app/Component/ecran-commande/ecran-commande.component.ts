import {Component, OnInit} from '@angular/core';
import {PlatService} from "../../services/plat.service";
import {CommandeService} from "../../services/commande.service";
import {map, Observable} from "rxjs";
import {Commande} from "../../entities/commande";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {CuisineService} from "../../services/cuisine.service";

@Component({
  selector: 'app-ecran-commande',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './ecran-commande.component.html',
  styleUrl: './ecran-commande.component.scss'
})
export class EcranCommandeComponent implements OnInit{

  public commandes$: Observable<Commande[]>;
  public commandesPretes: Commande[] = [];

  constructor(private service: CommandeService, private router: Router,private cuisineService : CuisineService) {
   this.commandes$ =  this.service.getAllCommandes();
  }



  ngOnInit(): void {
    this.commandes$ = this.service.getAllCommandes()

  }

 /* public naviguerVersCommande(id: number) {
    this.router.navigate(['menu-equipe/cuisine', id]);
  }*/

  public modifStatut(nouvelEtat: string, id: number): void {
    this.cuisineService.modifierStatutCommande(nouvelEtat, id).subscribe({
      next: (commandeModifiee) => {
        this.commandesPretes.push(commandeModifiee);
        // Mettre à jour commandesEnCours$ si nécessaire, ou simplement retirer la commande de l'UI sans recharger
      },
      error: (erreur) => console.error(erreur)
    });
  }

}
