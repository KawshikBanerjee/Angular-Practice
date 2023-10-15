import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AGGrid';

  // rowData: any[] = [
  //   { make: 'iPhone', model: '11', price: 699 },
  //   { make: 'iPhone', model: '12', price: 799 },
  //   { make: 'iPhone', model: '13', price: 899 }
  // ];

  constructor(private http: HttpClient) {}

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json')
  }
  
  rowData$!: Observable<any[]>;

  colDefs: ColDef[] = [
    {field: 'athlete'},
    {field: 'age'},
    {field: 'country'},
    {field: 'year'},
    {field: 'date'},
    {field: 'sport'},
    {field: 'gold'},
    {field: 'silver'},
    {field: 'bronze'},
    {field: 'total'},
  ];

  defaultColDef: ColDef = {
    sortable: true, 
    filter: true,
    enableRowGroup: true
  }

  onCellClicked(event: CellClickedEvent) {
    console.log(event);
  }

  clearSelection() {
    this.agGrid.api.deselectAll();
  }
}
