import { Component, OnInit } from '@angular/core';
import { Biere } from '../../entities/biere';
import { FormsModule } from '@angular/forms';
import { BiereService } from '../../services/biere.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-update-biere',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './create-update-biere.component.html',
  styleUrl: './create-update-biere.component.scss'
})
export class CreateUpdateBiereComponent implements OnInit {

  public biere?: Biere;

  public dialogRef?: MatDialogRef<CreateUpdateBiereComponent>;

  constructor(private biereService: BiereService) {
  }

  ngOnInit(): void {
    if (this.biere == null) {
      this.biere = new Biere();
    }
  }

  public submit(): void {
    if (this.biere == null) {
      return;
    }

    if (this.biere.id == null) {
      this.biereService.create(this.biere);
    } else {
      this.biereService.update(this.biere);
    }

    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
