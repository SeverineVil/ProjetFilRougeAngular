import { Component } from '@angular/core';
import { TypeDeBiereService } from '../../services/type-de-biere.service';
import { TypeDeBiere } from '../../entities/type-de-biere';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { YesNoComponent } from '../../core/components/yes-no/yes-no.component';
import { CreateUpdateTypeDeBiereComponent } from '../create-update-type-de-biere/create-update-type-de-biere.component';

@Component({
  selector: 'app-types-de-biere',
  standalone: true,
  imports: [RouterModule, CommonModule, NgbModalModule],
  templateUrl: './types-de-biere.component.html',
  styleUrl: './types-de-biere.component.scss'
})
export class TypesDeBiereComponent {

  public typesDeBiere: TypeDeBiere[];

  constructor(private typeDeBiereService: TypeDeBiereService, private ngbModal: NgbModal) {
    this.typesDeBiere = typeDeBiereService.getAllTypesDeBiere();
  }

  public delete(typeDeBiere: TypeDeBiere): void {

    const modalRef: NgbModalRef = this.ngbModal.open(YesNoComponent, {
      centered: true,
      animation: true
    });

    const yesNoComponent: YesNoComponent = modalRef.componentInstance;

    yesNoComponent.header = 'Suppression du type de bière';
    yesNoComponent.body = 'Etes-vous sûr de vouloir supprimer ce type de bière ?';
    yesNoComponent.yesClicked.subscribe(() => {
      this.typeDeBiereService.deleteTypeDeBiere(typeDeBiere);
      modalRef.close();
    });
    yesNoComponent.noClicked.subscribe(() => modalRef.close());
  }
}
