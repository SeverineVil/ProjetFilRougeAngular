import { Component } from '@angular/core';
import { BiereService } from '../../services/biere.service';
import { MatTableModule } from '@angular/material/table';
import { Biere } from '../../entities/biere';

@Component({
  selector: 'app-bieres',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './bieres.component.html',
  styleUrl: './bieres.component.scss'
})
export class BieresComponent {

  public displayedColumns = ['id', 'libelle'];
  public bieres: Biere[];

  constructor(private biereService: BiereService) {
    this.bieres = biereService.getAllItems();
  }
}
