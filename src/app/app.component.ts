import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TypeDeBiereService } from './services/type-de-biere.service';
import { PokemonModule } from './modules/pokemon/pokemon.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PokemonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BrewApp';

  constructor(typesDeBiereService: TypeDeBiereService) { }
}
