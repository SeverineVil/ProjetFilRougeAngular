import { Component } from '@angular/core';
import { CommandeService } from '../../services/commande.service';
import { PlatsComponent } from "../plats/plats.component";
import { CommandeEnCoursComponent } from '../commande-en-cours/commande-en-cours.component';
import { Commande } from '../../entities/commande';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-commandes',
    standalone: true,
    templateUrl: './commandes.component.html',
    styleUrl: './commandes.component.scss',
    imports: [PlatsComponent, CommandeEnCoursComponent]
})
export class CommandesComponent {
  
  public commandeId: number | null = null;
  public commande?: Commande;

  constructor(private commandeService: CommandeService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    {
     
      this.route.params.subscribe(params => {
        this.commandeId = +params['id']; 
        this.commandeService.getCommandeById(this.commandeId)?.subscribe(
          (commande) => {this.commande = commande;
          this.setCommandeId(commande.id!)},
        );
      });
    }
    }

  public setCommandeId(id: number): void {
    this.commandeService.setCommandeId(id);
  }
}

