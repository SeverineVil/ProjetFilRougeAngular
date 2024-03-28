import { Component, OnInit } from '@angular/core';
import { PlatService } from '../../services/plat.service';
import { Commande } from '../../entities/commande';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Plat } from '../../entities/plat';
import { CommandeService } from '../../services/commande.service';
import { PlatsComponent } from '../plats/plats.component';

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


  public _id : number = 318;

  constructor(private platService:PlatService, private commandeService : CommandeService){}
   
  ngOnInit(): void {
    this._commande$ = this.commandeService.getCommandeById(this._id);
    // Abonnez-vous à _commande$ ici si vous devez réagir à ses changements
    this._commande$?.subscribe(commande => {
      // Mettez à jour les plats de la commande dans platsCommande
      this.platsCommande.set(commande.id!.toString(), commande.plats || []);
    });
  }



}
