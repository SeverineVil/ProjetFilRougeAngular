import { Component, HostBinding } from '@angular/core';
import { Pokemon } from '../../entities/pokemon';
import { PokemonAPIService } from '../../services/pokemon-api.service';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-fiche-pokemon',
  templateUrl: './fiche-pokemon.component.html',
  styleUrl: './fiche-pokemon.component.scss'
})
export class FichePokemonComponent {

  @HostBinding('class') public classAttribute = 'p-2';

  public pokemon?: Pokemon;

  constructor(private pokemonService: PokemonService) {
    this.pokemon = pokemonService.currentPokemon;
  }

  public previous(): void {
    this.pokemonService.setPreviousPokemon();
    this.pokemon = this.pokemonService.currentPokemon;
  }

  public next(): void {
    this.pokemonService.setNextPokemon();
    this.pokemon = this.pokemonService.currentPokemon;
  }
}
