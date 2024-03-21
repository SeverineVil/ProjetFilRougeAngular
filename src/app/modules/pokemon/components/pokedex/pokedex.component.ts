import { Component, Injector } from '@angular/core';
import { PokemonAPIService } from '../../services/pokemon-api.service';
import { Observable } from 'rxjs';
import { Pokemon, Pokemons } from '../../entities/pokemon';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FichePokemonComponent } from '../fiche-pokemon/fiche-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

  public search?: string;

  public pokemons$!: Observable<Pokemons>;

  constructor(private pokemonService: PokemonService, private ngbModal: NgbModal) {
    this.refreshPokemons();
  }

  public refreshPokemons(): void {
    this.pokemons$ = this.pokemonService.getAllPokemons(this.search);
  }

  public selectPokemon(pokemon: Pokemon): void {
    this.pokemonService.currentPokemon = pokemon;

    this.ngbModal.open(FichePokemonComponent);
  }
}
