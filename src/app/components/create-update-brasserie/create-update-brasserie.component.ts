import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Brasserie } from '../../entities/brasserie';

@Component({
  selector: 'app-create-update-brasserie',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
    return this._brasserie == null;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      libelle: [this._brasserie?.libelle, Validators.required],
      pays: [this._brasserie?.pays, [Validators.minLength(3), Validators.maxLength(15)]]
    });
  }

  public formValidation(): void {
    console.log(this.formGroup);

  }
}
