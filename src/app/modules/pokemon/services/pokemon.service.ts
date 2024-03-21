import { Injectable } from '@angular/core';
import { PokemonAPIService } from './pokemon-api.service';
import { Observable, map } from 'rxjs';
import { Pokemon, Pokemons } from '../entities/pokemon';

@Injectable()
export class PokemonService {
  private _currentPokemon?: Pokemon;

  public get currentPokemon(): Pokemon | undefined {
    return this._currentPokemon;
  }
  public set currentPokemon(value: Pokemon) {
    this._currentPokemon = value;

    if (this.allPokemons) {
      this.allPokemons.forEach(p => p.selected = false);
    }

    if (this._currentPokemon != undefined) {
      this._currentPokemon.selected = true;
    }
  }
  private allPokemons?: Pokemons;
  private allFilteredPokemons?: Pokemons;

  public get displayedPokemons(): Pokemons {
    return this.allFilteredPokemons || this.allPokemons || [];
  }

  constructor(private pokemonAPIService: PokemonAPIService) { }

  public setNextPokemon(): void {
    const pokemons: Pokemons = this.displayedPokemons;

    let index: number = pokemons.findIndex(p => p == this.currentPokemon);
    if (index < 0) {
      throw "Pokemon index not found";
    }

    if ((index + 1) == pokemons.length) {
      index = 0;
    } else {
      index++;
    }
    this.currentPokemon = pokemons[index];
  }

  public setPreviousPokemon(): void {
    const pokemons: Pokemons = this.displayedPokemons;

    let index: number = pokemons.findIndex(p => p == this.currentPokemon);
    if (index < 0) {
      throw "Pokemon index not found";
    }

    // Si on est sur le 1er pokémon, on affiche le dernier
    if (index == 0) {
      index = pokemons.length - 1;
    } else {
      index--;
    }

    this.currentPokemon = pokemons[index];
  }

  public getAllPokemons(search?: string): Observable<Pokemons> {

    return this.pokemonAPIService.getAllPokemons(search).pipe(
      map((pokemons: Pokemons) => {
        if (search == null) {
          this.allPokemons = pokemons;
          this.allFilteredPokemons = undefined;
        } else {
          this.allFilteredPokemons = pokemons;
        }

        return pokemons;
      })
    )
  }
}
