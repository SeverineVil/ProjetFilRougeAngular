import { Component } from '@angular/core';
import { TypeDeBiereService } from '../../services/type-de-biere.service';
import { TypeDeBiere } from '../../entities/type-de-biere';

@Component({
  selector: 'app-types-de-biere',
  standalone: true,
  imports: [],
  templateUrl: './types-de-biere.component.html',
  styleUrl: './types-de-biere.component.scss'
})
export class TypesDeBiereComponent {

  constructor(private typeDeBiereService: TypeDeBiereService) {


  }
}
