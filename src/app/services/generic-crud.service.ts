import { BaseEntity } from "../entities/base-entity";
import { StorageService } from "./storage.service";

export abstract class GenericCRUDService<T extends BaseEntity> {

    protected abstract readonly storageKey: string;

    protected abstract itemFactory: () => T;

    /**
     * "Cache" des items T
     */
    private __items!: T[];

    private get _items(): T[] {
        if (this.__items == null) {
            this.loadItems();
        }
        return this.__items;
    }
    private set _items(v: T[]) {
        this.__items = v;
    }

    constructor(private storageService: StorageService) {
    }

    /**
     * Crée un nouveau type T.
     * @param item Item à créer
     * @returns Indique si la création s'est bien passée.
     */
    public create(item: T): boolean {
        if (item == null || item.id != null) {
            return false;
        }

        const maxId: number = this._items.length == 0 ?
            0 :
            Math.max(...this._items.map(t => t.id ?? 0));


        // Ajout de l'item dans le tableau
        this._items.push(item);


        // Modification de l'objet item.
        // Le tableau contient l'objet item, il est automatiquement "mis à jour"
        item.id = maxId + 1;

        this.saveItems();

        return true;
    }

    public update(item: T): boolean {

        if (item == null) {
            return false;
        }

        const index: number = this._items.findIndex(t => t.id == item.id);

        if (index < 0) {
            return false;
        }

        this._items[index] = item;

        this.saveItems();

        return true;
    }

    /**
     * 
     * @param itemOrId L'item ou l'id de l'item à supprimer
     * @returns 
     */
    public delete(itemOrId: T | number): boolean {
        if (itemOrId == null) {
            return false;
        }

        let id: number | undefined;
        if (typeof itemOrId == 'number') {
            // On est sur un id
            id = itemOrId;
        } else {
            id = itemOrId.id;
        }

        const index: number = this._items.findIndex(t => t.id == id);
        if (index < 0) {
            return false;
        }

        this._items.splice(index, 1);

        this.saveItems();

        return true;
    }

    public getItemById(id: number): T | undefined {
        return this._items.find(t => t.id === id);
    }

    public getAllItems(): T[] {
        return this._items;
    }

    private loadItems(): void {
        const items: string | null = this.storageService.get(this.storageKey);

        try {

            if (items != null) {
                const tempItems: any[] = JSON.parse(items);

                // On boucle sur les items du local storage
                // pour instancier des objets du bon type au runtime.
                this._items = tempItems.map(t => {
                    const item: T = this.itemFactory();

                    // Copie des propriétés de "t" dans "item"
                    Object.assign(item, t);

                    return item;
                });
            }
        } catch (e) {
            console.error(e);
        } finally {

            if (this.__items == null) {
                this.__items = [];
            }
        }
    }

    private saveItems(): void {
        const s: string = JSON.stringify(this._items);
        this.storageService.set(this.storageKey, s);
    }
}