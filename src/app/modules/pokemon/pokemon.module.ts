import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../../core/components/alert/alert.component';
import { FichePokemonComponent } from './components/fiche-pokemon/fiche-pokemon.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonAPIService } from './services/pokemon-api.service';
import { PokemonService } from './services/pokemon.service';
import { PokemonRoutingModule } from './pokemon-routing.module';

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
    FormsModule,
    NgbModalModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonService,
    PokemonAPIService
  ]
})
export class PokemonModule { }
