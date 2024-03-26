import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuEquipeComponent } from './pages/menu-equipe/menu-equipe.component';
import {CaisseComponent} from "./pages/caisse/caisse.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu-equipe', component: MenuEquipeComponent },
  {path:'menu-equipe/caisse', component: CaisseComponent}
];
