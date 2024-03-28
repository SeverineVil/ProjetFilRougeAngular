import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat, Plats } from '../../entities/plat';
import { PlatService } from '../../services/plat.service';
import { Commande, Commandes } from '../../entities/commande';
import { CommandeService } from '../../services/commande.service';

@Component({
  selector: 'app-plats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plats.component.html',
  styleUrl: './plats.component.scss'
})
export class PlatsComponent {


  public commandeId: number | null = null;
  public _plats$?: Observable<Plat[]>;
  public _commandes$?: Observable<Commandes>;

constructor(private platService : PlatService, private commandeService : CommandeService) {

}

ngOnInit(): void {
  this._plats$ = this.platService.getAllPlats();
  this._plats$.subscribe(p=>console.log(p));
  this._commandes$ = this.commandeService.getAllCommandes();
  this._commandes$.subscribe(p=>console.log(p));
  this.commandeService.commandeId$.subscribe(id => {
    this.commandeId = id;
  });
}

public ajouterPlatCommande(plat: Plat) {
this.commandeService.ajouterPlatCommande(plat)
}

}
