import { Injectable } from '@angular/core';
import { Brasserie } from '../entities/brasserie';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BrasserieService {

  private static readonly _brasseriesStorageKey = "BREWERIES_KEY";

  /**
   * "Cache" des brasseries
   */
  private _brasseries!: Brasserie[];

  constructor(private storageService: StorageService) {
    this.loadBrasseries();
  }

  /**
   * Crée un nouveau type de bière.
   * @param type Type de bière à créer
   * @returns Indique si la création s'est bien passée.
   */
  public createBrasserie(type: Brasserie): boolean {
    if (type == null || type.id != null) {
      return false;
    }

    const maxId: number = this._brasseries.length == 0 ?
      0 :
      Math.max(...this._brasseries.map(t => t.id ?? 0));


    // Ajout du type dans le tableau
    this._brasseries.push(type);


    // Modification de l'objet type.
    // Le tableau contient l'objet type, il est automatiquement "mis à jour"
    type.id = maxId + 1;

    this.saveBrasseries();

    return true;
  }

  public updateBrasserie(type: Brasserie): boolean {

    if (type == null) {
      return false;
    }

    const index: number = this._brasseries.findIndex(t => t.id == type.id);

    if (index < 0) {
      return false;
    }

    this._brasseries[index] = type;

    this.saveBrasseries();

    return true;
  }

  /**
   * 
   * @param typeOrId Type de bière ou id du type supprimer
   * @returns 
   */
  public deleteBrasserie(typeOrId: Brasserie | number): boolean {
    if (typeOrId == null) {
      return false;
    }

    let id: number | undefined;
    if (typeOrId instanceof Brasserie) {
      // On est sur une instance de Brasserie
      id = typeOrId.id;
    } else {
      id = typeOrId;
    }

    const index: number = this._brasseries.findIndex(t => t.id == id);
    if (index < 0) {
      return false;
    }

    this._brasseries.splice(index, 1);

    this.saveBrasseries();

    return true;
  }

  public getBrasserieById(id: number): Brasserie | undefined {
    return this._brasseries.find(t => t.id == id);
  }

  public getAllBrasseries(): Brasserie[] {
    return this._brasseries;
  }

  private loadBrasseries(): void {
    const types: string | null = this.storageService.get(BrasserieService._brasseriesStorageKey);

    try {

      if (types != null) {
        const tempTypes: any[] = JSON.parse(types);

        this._brasseries = tempTypes.map(t => {
          const type = new Brasserie();

          // Copie des propriétés de "t" dans "type"
          Object.assign(type, t);

          return type;
        });
      }
    } catch (e) {
      console.error(e);
    } finally {

      if (this._brasseries == null) {
        this._brasseries = [];
      }
    }
  }

  private saveBrasseries(): void {
    const s: string = JSON.stringify(this._brasseries);
    this.storageService.set(BrasserieService._brasseriesStorageKey, s);
  }
}
