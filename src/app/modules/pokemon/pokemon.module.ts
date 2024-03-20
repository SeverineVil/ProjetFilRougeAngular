import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { FichePokemonComponent } from './components/fiche-pokemon/fiche-pokemon.component';

@NgModule({
  declarations: [PokedexComponent, FichePokemonComponent],
  exports: [
    PokedexComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
