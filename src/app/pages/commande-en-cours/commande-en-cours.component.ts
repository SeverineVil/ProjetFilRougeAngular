import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../../entities/commande';
import { Plat } from '../../entities/plat';
import { CommandeService } from '../../services/commande.service';
import { PlatService } from '../../services/plat.service';

@Component({
  selector: 'app-commande-en-cours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commande-en-cours.component.html',
  styleUrl: './commande-en-cours.component.scss'
})
export class CommandeEnCoursComponent implements OnInit{

  public _commande$? : Observable<Commande>;
  public platsCommande :Map<string, Plat[]> = new Map();
  public commandeId?: number | null = null;

  constructor(private platService:PlatService, private commandeService : CommandeService){}
   
  ngOnInit(): void {
    this.commandeService.commandeId$.subscribe(id => {
      this.commandeId = id;
      this._commande$ = this.commandeService.getCommandeById(this.commandeId!);
      this._commande$?.subscribe(commande => {
        // Mettez à jour les plats de la commande dans platsCommande
        this.platsCommande.set(commande.id!.toString(), commande.plats || []);
      });
    });
    
    // Abonnez-vous à _commande$ ici si vous devez réagir à ses changements
    
  }

}
