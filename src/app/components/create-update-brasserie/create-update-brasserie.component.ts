import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Brasserie } from '../../entities/brasserie';
import { BrasserieService } from '../../services/brasserie.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from '../../core/components/alert/alert.component';

@Component({
  selector: 'app-create-update-brasserie',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AlertComponent],
  templateUrl: './create-update-brasserie.component.html',
  styleUrl: './create-update-brasserie.component.scss'
})
export class CreateUpdateBrasserieComponent implements OnInit {

  private _brasserie?: Brasserie;

  public set brasserie(v: Brasserie | undefined) {
    this._brasserie = v;
  }

  @HostBinding('class')
  public hostClass = 'p-3';

  public formGroup?: FormGroup;

  public get isInCreation(): boolean {
    return this._brasserie == null || this._brasserie.id == null;
  }

  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private brasseriesService: BrasserieService,
    /**
     * @Optional() permet de préciser à Angular, que s'il ne trouve 
     * pas d'instance de NgbActiveModal, il peut injecter une valeur nulle.
     */
    @Optional()
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      libelle: [this._brasserie?.libelle, Validators.required],
      pays: [this._brasserie?.pays, [Validators.minLength(3), Validators.maxLength(15)]]
    });
  }

  public formValidation(): void {
    this.submitted = true;

    // Si le formulaire est invalide, on ne met pas à jour les données
    if (this.formGroup?.invalid) {
      return;
    }

    if (this._brasserie == null) {
      this._brasserie = new Brasserie();
    }

    // Mise à jour des propriétés de la brasserie avec le formulaire
    Object.assign(this._brasserie, this.formGroup?.value);

    if (this._brasserie.id == null) {
      this.brasseriesService.create(this._brasserie);
    } else {
      this.brasseriesService.update(this._brasserie);
    }

    if (this.activeModal) {
      this.activeModal.close();
    }
  }
}
