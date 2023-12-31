import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MyCellComponent } from './my-cell/my-cell.component';
import { MyCustomComponent } from './my-custom/my-custom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AGGrid';

  rowData!: Observable<any[]>;

  // rowData: any[] = [
  //   { make: 'iPhone', model: '11', price: 699 },
  //   { make: 'iPhone', model: '12', price: 799 },
  //   { make: 'iPhone', model: '13', price: 899 }
  // ];

  constructor(private http: HttpClient) {}

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  ngOnInit() {
    this.rowData = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/olympic-winners.json'
    );
  }

  colDefs: ColDef[] = [
    {
      field: 'athlete',
      cellRenderer: MyCellComponent,
      cellRendererParams: {
        buttonText: 'Name',
      },
    },
    {
      field: 'age',
      // cellRenderer: MyCellComponent,
      // cellRendererParams: {
      //   buttonText: 'Age',
      // },
    },
    {
      field: 'country',
      headerComponent: MyCustomComponent,
      headerComponentParams: {
        name: 'Desher Name',
      },
    },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    enableRowGroup: true,
    resizable: true,
  };

  onCellClicked(event: CellClickedEvent) {
    console.log(event);
  }

  clearSelection() {
    this.agGrid.api.deselectAll();
  }
}
