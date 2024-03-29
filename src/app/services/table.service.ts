import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Table } from '../entities/table';

@Injectable({
  providedIn: 'root',
})
export class TableService implements OnInit {

 
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getAllTables();
   
   
  }

  public getAllTables(): Observable<Table[]> {
    return this.httpClient.get<Table[]>('http://localhost:8080/tables').pipe(
      map((mesTables: Table[]) => {
        if (mesTables == null) {
          return [];
        }
       
        return mesTables;
      })
    );
  }

 
  }

  

