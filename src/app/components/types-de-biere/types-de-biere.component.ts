import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDirective } from '../../core/directives/confirm.directive';
import { TypeDeBiere } from '../../entities/type-de-biere';
import { TypeDeBiereService } from '../../services/type-de-biere.service';

@Component({
  selector: 'app-types-de-biere',
  standalone: true,
  imports: [RouterModule, CommonModule, NgbModalModule, ConfirmDirective],
  templateUrl: './types-de-biere.component.html',
  styleUrl: './types-de-biere.component.scss'
})
export class TypesDeBiereComponent {

  public typesDeBiere: TypeDeBiere[];

  constructor(private typeDeBiereService: TypeDeBiereService) {
    this.typesDeBiere = typeDeBiereService.getAllTypesDeBiere();
  }

  public delete(typeDeBiere: TypeDeBiere): void {
    this.typeDeBiereService.deleteTypeDeBiere(typeDeBiere);
  }
}
