import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuEquipeComponent } from './pages/menu-equipe/menu-equipe.component';
import { PlatsComponent } from './pages/plats/plats.component';
import { CaisseComponent } from './pages/caisse/caisse.component';
import { CuisineComponent } from './pages/cuisine/cuisine.component';
import { AccueilClientsComponent } from './pages/accueil-clients/accueil-clients.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { CommandeEnCoursComponent } from './pages/commande-en-cours/commande-en-cours.component';
import { CommandesComponent } from './pages/commandes/commandes.component';
import { TablesComponent } from './tables/tables.component';



export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu-equipe', component: MenuEquipeComponent },
  { path: 'plats', component:PlatsComponent},
  { path: 'commande-en-cours', component:CommandeEnCoursComponent},
  { path: 'menu-equipe/caisse', component: CaisseComponent },
  { path: 'menu-equipe/cuisine', component: CuisineComponent },
  { path: 'menu-equipe/accueil-clients', component: AccueilClientsComponent },
  { path: 'menu-equipe/reservation', component: ReservationComponent },
  { path: 'menu-equipe/commandes', component: CommandesComponent },
  { path: 'menu-equipe/commandes/:id', component: CommandesComponent },
  { path: 'menu-equipe/reservation/tables', component: TablesComponent },
  { path: 'menu-equipe/reservation/tables/:id', component: TablesComponent },
];

