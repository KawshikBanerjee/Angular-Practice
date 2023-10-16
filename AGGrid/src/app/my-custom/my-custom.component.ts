import { Component } from '@angular/core';
import { ICellRendererAngularComp, IHeaderAngularComp } from 'ag-grid-angular';
import {
  ICellComp,
  ICellRendererParams,
  IHeaderParams,
} from 'ag-grid-community';

export interface MyParams {
  name?: string;
}

@Component({
  selector: 'app-my-custom',
  template: `{{ name }}`,
  styles: [],
})
export class MyCustomComponent implements IHeaderAngularComp {
  constructor() {}

  name?: string;

  agInit(params: IHeaderParams & MyParams): void {
    this.name = params.name;
  }

  refresh(params: IHeaderParams): boolean {
    return false;
  }

  ngOnInit(): void {}
}
