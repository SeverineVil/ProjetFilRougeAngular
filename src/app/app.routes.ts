import { Routes } from '@angular/router';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { TypesDeBiereComponent } from './components/types-de-biere/types-de-biere.component';
import { CreateUpdateTypeDeBiereComponent } from './components/create-update-type-de-biere/create-update-type-de-biere.component';

export const routes: Routes = [
    { path: 'exercices', component: ExercicesComponent },
    { path: 'hello-world', component: HelloWorldComponent },
    { path: 'types-de-biere', component: TypesDeBiereComponent },
    { path: 'create-type-de-biere', component: CreateUpdateTypeDeBiereComponent },
    { path: 'update-type-de-biere/:id', component: CreateUpdateTypeDeBiereComponent }
];
