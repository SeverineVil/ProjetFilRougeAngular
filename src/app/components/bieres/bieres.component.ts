import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog, MatDialogRef
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Biere } from '../../entities/biere';
import { BiereService } from '../../services/biere.service';
import { CreateUpdateBiereComponent } from '../create-update-biere/create-update-biere.component';

@UntilDestroy()
@Component({
  selector: 'app-bieres',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './bieres.component.html',
  styleUrl: './bieres.component.scss'
})
export class BieresComponent {

  public displayedColumns = ['id', 'libelle', 'actions'];
  public bieres: Biere[];

  constructor(private biereService: BiereService, private matDialog: MatDialog) {
    this.bieres = biereService.getAllItems();
  }

  public createBeer(): void {
    this.updateBeer();
  }

  public updateBeer(biere?: Biere): void {
    const matDialogRef: MatDialogRef<CreateUpdateBiereComponent> =
      this.matDialog.open(CreateUpdateBiereComponent);

    matDialogRef.componentInstance.biere = biere;
    matDialogRef.componentInstance.dialogRef = matDialogRef;

    matDialogRef.afterClosed().pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      this.bieres = [...this.biereService.getAllItems()];
    })
  }

  public deleteBeer(biere: Biere): void {
    this.biereService.delete(biere);

    this.bieres = [...this.biereService.getAllItems()];
  }
}
