import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemons } from '../entities/pokemon';

@Injectable()
export class PokemonAPIService {

  constructor(private httpClient: HttpClient) { }

  public getAllPokemons(): Observable<Pokemons> {
    return this.httpClient.get<Pokemons>('https://pokebuildapi.fr/api/v1/pokemon');
  }
}
