import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private static readonly _cacheMinutes = 60 * 24; // 1 jour

  constructor(private storageService: StorageService) { }

  /**
   * Récupère une donnée dans le cache.
   * Si la donnée n'existe pas, elle est chargée puis sauvegardée en cache
   * @param cacheKey 
   * @param loadFn 
   * @returns 
   */
  public getFromCacheOrLoadIfNotExists<T>(cacheKey: string, loadFn: () => Observable<T>): Observable<T | null> {

    const storageValue: T | null = this.getFromStorage(cacheKey);

    if (storageValue) {
      return of(storageValue)
    }

    return loadFn().pipe(
      map((t: T) => {
        this.saveInStorageIfNotExists(cacheKey, t);
        return t;
      }),
      catchError(e => {
        console.error(e);
        return of(null);
      })
    )
  }

  private getFromStorage<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (!item) return null;

    try {
      const record = JSON.parse(item);
      const now = new Date().getTime();
      if (now > record.expires) {
        localStorage.removeItem(key);
        return null;
      }
      return record.value;
    } catch (e) {
      this.storageService.delete(key);
      return null;
    }

  }

  private saveInStorageIfNotExists<T>(key: string, data: T): void {
    const expires = new Date().getTime() + CacheService._cacheMinutes * 60000;
    const record = { value: data, expires };
    this.storageService.set(key, JSON.stringify(record));
  }
}
