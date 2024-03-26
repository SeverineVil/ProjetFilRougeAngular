import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuEquipeComponent } from './pages/menu-equipe/menu-equipe.component';
import {CaisseComponent} from "./pages/caisse/caisse.component";
import {CuisineComponent} from "./pages/cuisine/cuisine.component";
import {AccueilClientsComponent} from "./pages/accueil-clients/accueil-clients.component";
import {ReservationComponent} from "./pages/reservation/reservation.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu-equipe', component: MenuEquipeComponent },
  {path:'menu-equipe/caisse', component: CaisseComponent},
  {path:'menu-equipe/cuisine', component: CuisineComponent},
  {path:'menu-equipe/accueil-clients', component: AccueilClientsComponent},
  {path:'menu-equipe/reservation', component: ReservationComponent}

];
