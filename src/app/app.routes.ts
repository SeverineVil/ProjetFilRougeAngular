import { Routes } from '@angular/router';
import { MenuEquipeComponent } from './pages/menu-equipe/menu-equipe.component';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'menu-equipe', component: MenuEquipeComponent},
  
    
   

];


