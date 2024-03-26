import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MenuEquipeComponent } from './pages/menu-equipe/menu-equipe.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'menu-equipe', component: MenuEquipeComponent },
];
