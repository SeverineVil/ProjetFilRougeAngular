import { Injectable } from '@angular/core';
import { TypeDeBiere } from '../entities/type-de-biere';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TypeDeBiereService {

  private static readonly _typesDeBiereStorageKey = "TDB_KEY";

  /**
   * "Cache" des types de bière
   */
  private _typesDeBiere!: TypeDeBiere[];

  constructor(private storageService: StorageService) {
    this.loadTypesDeBiere();
  }

  /**
   * Crée un nouveau type de bière.
   * @param type Type de bière à créer
   * @returns Indique si la création s'est bien passée.
   */
  public createTypeDeBiere(type: TypeDeBiere): boolean {
    if (type == null || type.id != null) {
      return false;
    }

    const maxId: number = this._typesDeBiere.length == 0 ?
      0 :
      Math.max(...this._typesDeBiere.map(t => t.id ?? 0));


    // Ajout du type dans le tableau
    this._typesDeBiere.push(type);


    // Modification de l'objet type.
    // Le tableau contient l'objet type, il est automatiquement "mis à jour"
    type.id = maxId + 1;

    this.saveTypesDeBiere();

    return true;
  }

  public updateTypeDeBiere(type: TypeDeBiere): boolean {

    if (type == null) {
      return false;
    }

    const index: number = this._typesDeBiere.findIndex(t => t.id == type.id);

    if (index < 0) {
      return false;
    }

    this._typesDeBiere[index] = type;

    this.saveTypesDeBiere();

    return true;
  }

  /**
   * 
   * @param typeOrId Type de bière ou id du type supprimer
   * @returns 
   */
  public deleteTypeDeBiere(typeOrId: TypeDeBiere | number): boolean {
    if (typeOrId == null) {
      return false;
    }

    let id: number | undefined;
    if (typeOrId instanceof TypeDeBiere) {
      // On est sur une instance de TypeDeBiere
      id = typeOrId.id;
    } else {
      id = typeOrId;
    }

    const index: number = this._typesDeBiere.findIndex(t => t.id == id);
    if (index < 0) {
      return false;
    }

    this._typesDeBiere.splice(index, 1);

    this.saveTypesDeBiere();

    return true;
  }

  public getTypeDeBiereById(id: number): TypeDeBiere | undefined {
    return this._typesDeBiere.find(t => t.id == id);
  }

  public getAllTypesDeBiere(): TypeDeBiere[] {
    return this._typesDeBiere;
  }

  private loadTypesDeBiere(): void {
    const types: string | null = this.storageService.get(TypeDeBiereService._typesDeBiereStorageKey);

    try {

      if (types != null) {
        this._typesDeBiere = JSON.parse(types);
      }
    } catch (e) {
      console.error(e);
    } finally {

      if (this._typesDeBiere == null) {
        this._typesDeBiere = [];
      }
    }
  }

  private saveTypesDeBiere(): void {
    const s: string = JSON.stringify(this._typesDeBiere);
    this.storageService.set(TypeDeBiereService._typesDeBiereStorageKey, s);
  }
}
