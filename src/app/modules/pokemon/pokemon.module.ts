import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { FichePokemonComponent } from './components/fiche-pokemon/fiche-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonAPIService } from './services/pokemon-api.service';

@NgModule({
  declarations: [PokedexComponent, FichePokemonComponent],
  exports: [
    PokedexComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PokemonAPIService
  ]
})
export class PokemonModule { }
