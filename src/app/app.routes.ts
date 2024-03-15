import { Routes } from '@angular/router';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

export const routes: Routes = [
    { path: 'exercices', component: ExercicesComponent },
    { path: 'hello-world', component: HelloWorldComponent }
];
