import { Injectable } from '@angular/core';
import { TypeDeBiere } from '../entities/type-de-biere';
import { StorageService } from './storage.service';
import { GenericCRUDService } from './generic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class TypeDeBiereService extends GenericCRUDService<TypeDeBiere> {

  protected override storageKey: string = 'TDB_KEY';
  protected override itemFactory = () => new TypeDeBiere();

  constructor(s: StorageService) {
    super(s)
  }
}
