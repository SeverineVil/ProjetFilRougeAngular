import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { FichePokemonComponent } from './components/fiche-pokemon/fiche-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonAPIService } from './services/pokemon-api.service';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../../core/components/alert/alert.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PokedexComponent, FichePokemonComponent],
  exports: [
    PokedexComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbTooltipModule,
    AlertComponent,
    FormsModule
  ],
  providers: [
    PokemonAPIService
  ]
})
export class PokemonModule { }
