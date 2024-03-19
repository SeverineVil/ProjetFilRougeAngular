import { Component } from '@angular/core';
import { BrasserieService } from '../../services/brasserie.service';
import { Brasserie } from '../../entities/brasserie';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModalModule, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDirective } from '../../core/directives/confirm.directive';
import { CreateUpdateBrasserieComponent } from '../create-update-brasserie/create-update-brasserie.component';

@Component({
  selector: 'app-brasseries',
  standalone: true,
  imports: [CommonModule, NgbModalModule, ConfirmDirective],
  templateUrl: './brasseries.component.html',
  styleUrl: './brasseries.component.scss'
})
export class BrasseriesComponent {

  public brasseries: Brasserie[];

  constructor(private brasseriesService: BrasserieService, private ngbModal: NgbModal) {
    this.brasseries = brasseriesService.getAllBrasseries()
  }

  public createBrasserie(): void {
    this.updateBrasserie();
  }

  public updateBrasserie(brasserie?: Brasserie) {
    const modalRef: NgbModalRef = this.ngbModal.open(CreateUpdateBrasserieComponent, {
      centered: true,
      animation: true
    });
    const component: CreateUpdateBrasserieComponent = modalRef.componentInstance;

    component.brasserie = brasserie;
  }

  public deleteBrasserie(brasserie: Brasserie): void {
    this.brasseriesService.deleteBrasserie(brasserie)
  }
}
