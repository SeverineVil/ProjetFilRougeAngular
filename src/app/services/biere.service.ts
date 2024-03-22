import { Injectable } from '@angular/core';
import { GenericCRUDService } from './generic-crud.service';
import { Biere } from '../entities/biere';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BiereService extends GenericCRUDService<Biere> {

  protected override storageKey: string = "BEERS_KEY"
  protected override itemFactory = () => new Biere();

  constructor(s: StorageService) { super(s); }
}
