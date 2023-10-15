import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './product/product.component';
import { AlertService } from './Services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
