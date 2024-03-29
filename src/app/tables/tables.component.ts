import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from '../entities/table';
import { TableService } from '../services/table.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent {


  public _table$?: Observable<Table[]>;
  public resaId: number | undefined;
 

  constructor(private tableService: TableService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllTables();
    this.route.params.subscribe(arg => {
      this.resaId = +arg['id'];
    
    });

  }

  getAllTables(): void {
    this._table$ = this.tableService.getAllTables();
    console.log(this._table$);
  }

 
 
}
