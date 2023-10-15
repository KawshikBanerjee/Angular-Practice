import { Component } from '@angular/core';
import { AlertService } from '../Services/alert.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers: [AlertService]
})

export class ProductComponent {
  title = 'Product';

  constructor(private alertService: AlertService) {}

  onClick() {
    // const alertService = new AlertService();
    this.alertService.onButtonClick(this.title);
  }
}
