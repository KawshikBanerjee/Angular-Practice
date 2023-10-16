import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { MyCellComponent } from './my-cell/my-cell.component';
import { MyCustomComponent } from './my-custom/my-custom.component'

@NgModule({
  declarations: [
    AppComponent,
    MyCellComponent,
    MyCustomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
