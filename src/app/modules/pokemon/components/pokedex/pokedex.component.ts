import { Component } from '@angular/core';
import { PokemonAPIService } from '../../services/pokemon-api.service';
import { Observable } from 'rxjs';
import { Pokemons } from '../../entities/pokemon';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

  public pokemons$: Observable<Pokemons>;

  constructor(private pokemonAPIService: PokemonAPIService) {
    this.pokemons$ = pokemonAPIService.getAllPokemons();
  }
}
