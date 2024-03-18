import { Component } from '@angular/core';
import { TypeDeBiereService } from '../../services/type-de-biere.service';
import { TypeDeBiere } from '../../entities/type-de-biere';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-types-de-biere',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './types-de-biere.component.html',
  styleUrl: './types-de-biere.component.scss'
})
export class TypesDeBiereComponent {

  public typesDeBiere: TypeDeBiere[];

  constructor(private typeDeBiereService: TypeDeBiereService) {
    this.typesDeBiere = typeDeBiereService.getAllTypesDeBiere();
  }
}
