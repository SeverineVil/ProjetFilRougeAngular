import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Pokemon, Pokemons } from '../entities/pokemon';

@Injectable()
export class PokemonAPIService {

  constructor(private httpClient: HttpClient) { }



  public getAllPokemons(search?: string): Observable<Pokemons> {

    return this.httpClient.get<Pokemons>('https://pokebuildapi.fr/api/v1/pokemon/').pipe(
      map((pokemons: Pokemons | null) => {

        if (pokemons == null) {
          return [];
        }

        return pokemons.filter(p => this.doesPokemonMatch(p, search))
      }),
      map((pokemonsFiltres: Pokemons) => {
        console.log('pokémons filtrés', pokemonsFiltres);

        pokemonsFiltres.forEach(p => p.cry$ = this.getPokemonCry(p));

        return pokemonsFiltres;
      }),
      catchError(e => {
        console.error(e);

        return of([]);
      })
    )
  }

  private getPokemonCry(pokemon: Pokemon): Observable<string | null> {
    return this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`).pipe(
      map((poke: any) => poke.cries.latest),
      catchError(e => {
        console.error(e);
        return of(null)
      })
    )
  }

  private doesPokemonMatch(pokemon: Pokemon, search?: string): boolean {
    if (search == null || search == '') {
      return true;
    }

    // Check sur le nom
    if (pokemon.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }

    // Check sur le type
    if (
      pokemon.apiTypes.some(t => t.name.toLowerCase().includes(search.toLowerCase()))) {
      return true;
    }

    return false;
  }
}
