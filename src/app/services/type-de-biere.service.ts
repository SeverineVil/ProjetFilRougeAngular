import { Injectable } from '@angular/core';
import { TypeDeBiere } from '../entities/type-de-biere';

@Injectable({
  providedIn: 'root'
})
export class TypeDeBiereService {

  /**
   * "Cache" des types de bière
   */
  private _typesDeBiere: TypeDeBiere[];

  constructor() {
    console.log('nouvelle instance de TypeDeBiereService');
    this._typesDeBiere = [];
  }

  /**
   * Crée un nouveau type de bière.
   * @param type Type de bière à créer
   * @returns Indique si la création s'est bien passée.
   */
  public createTypeDeBiere(type: TypeDeBiere): boolean {
    // TODO
    return false;
  }

  public updateTypeDeBiere(type: TypeDeBiere): boolean {
    // TODO
    return false;
  }

  /**
   * 
   * @param typeOrId Type de bière ou id du type supprimer
   * @returns 
   */
  public deleteTypeDeBiere(typeOrId: TypeDeBiere | number): boolean {
    // TODO
    return false;
  }

  public getTypeDeBiereById(id: number): TypeDeBiere | undefined {
    // TODO
    return undefined;
  }

  public getTypesDeBiere(): TypeDeBiere[] {
    // TODO
    return [];
  }

}
