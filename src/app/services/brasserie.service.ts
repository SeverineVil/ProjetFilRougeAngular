import { Injectable } from '@angular/core';
import { Brasserie } from '../entities/brasserie';
import { StorageService } from './storage.service';
import { GenericCRUDService } from './generic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class BrasserieService extends GenericCRUDService<Brasserie> {

  protected override storageKey: string = "BREWERIES_KEY";
  protected override itemFactory = () => new Brasserie();

  constructor(s: StorageService) {
    super(s);
  }
}
