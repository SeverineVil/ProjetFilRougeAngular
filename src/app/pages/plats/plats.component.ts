import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat, Plats } from '../../entities/plat';
import { PlatService } from '../../services/plat.service';
import { Commande, Commandes } from '../../entities/commande';

@Component({
  selector: 'app-plats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plats.component.html',
  styleUrl: './plats.component.scss'
})
export class PlatsComponent {

  public _plats$: Observable<Plat[]>;
  public _commandes$: Observable<Commandes>;

constructor(private platService : PlatService) {
  this._plats$ = platService.getAllPlats();
  this._plats$.subscribe(p=>console.log(p));
  this._commandes$ = platService.getAllCommandes();
  this._commandes$.subscribe(p=>console.log(p));

  this.platService.ouvertureCommande();
}

public ajouterPlatCommande(plat: Plat) {
this.platService.ajouterPlatCommande(plat)
}

}
