import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat } from '../../entities/plat';
import { PlatService } from '../../services/plat.service';

@Component({
  selector: 'app-plats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plats.component.html',
  styleUrl: './plats.component.scss'
})
export class PlatsComponent {

  public _plats$:Observable<Plat[]>;

constructor(private platService : PlatService) {
  this._plats$ = platService.getAllPlats();
  this._plats$.subscribe(p=>console.log(p));
}



}
