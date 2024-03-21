import { Routes } from '@angular/router';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { TypesDeBiereComponent } from './components/types-de-biere/types-de-biere.component';
import { CreateUpdateTypeDeBiereComponent } from './components/create-update-type-de-biere/create-update-type-de-biere.component';
import { BrasseriesComponent } from './components/brasseries/brasseries.component';
import { NewStructuralDirectivesComponent } from './components/new-structural-directives/new-structural-directives.component';

export const routes: Routes = [
    {
        path: 'exercices',
        loadComponent:
            () => import('./components/exercices/exercices.component').then(f => f.ExercicesComponent)
    },
    { path: 'hello-world', component: HelloWorldComponent },
    { path: 'types-de-biere', component: TypesDeBiereComponent },
    { path: 'create-type-de-biere', component: CreateUpdateTypeDeBiereComponent },
    { path: 'update-type-de-biere/:id', component: CreateUpdateTypeDeBiereComponent },
    { path: 'brasseries', component: BrasseriesComponent },
    {
        path: 'pokedex', loadChildren: () =>
            import('./modules/pokemon/pokemon.module').then(f => f.PokemonModule)
    },
    { path: 'angular-17-features', component: NewStructuralDirectivesComponent }
];
