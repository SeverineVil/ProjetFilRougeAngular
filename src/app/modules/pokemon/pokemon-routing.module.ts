import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FichePokemonComponent } from "./components/fiche-pokemon/fiche-pokemon.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";

const routes: Routes = [
    { path: 'fiche-pokemon', component: FichePokemonComponent },
    { path: '**', component: PokedexComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonRoutingModule {

}