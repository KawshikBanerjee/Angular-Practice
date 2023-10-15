// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, map, subscribeOn } from 'rxjs';
import { Product } from './model/products';
import { ProductService } from './Service/products.service';
import { NgForm } from '@angular/forms';
// import { url } from 'inspector';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'AngularHttpRequest';
  allProduct: Product[] = [];
  currentProductId: string;
  isFetching: boolean = false;
  editMode: boolean = false;
  errorMessage: string = null;
  errorSub: Subscription;
  
  @ViewChild('productsForm')
  form: NgForm; 

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchProduct();
    this.errorSub = this.productService.error.subscribe((message) => {
      this.errorMessage = message;
    })
  }

  onProductsFetch() {
    this.fetchProduct();
  }

  onProductCreate(products: {pName: string, desc: string, price: string}) {
    if (!this.editMode) {
      this.productService.createProduct(products);
    } else {
      this.productService.editProduct(this.currentProductId, products);
    }
  }

  private fetchProduct() {
    this.isFetching = true;
    this.productService.fetchProduct()
    .subscribe((products)=>{
        this.allProduct = products;
        this.isFetching = false;
    }, (err) => {
      this.errorMessage = err.message;
    })
  }

  onDeleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }

  onDeleteAllProduct() {
    this.productService.deleteAllProduct();
  }

  onEditProduct(id: string) {
    // get product bsed on id
    let currentProduct = this.allProduct.find((current) => {return current.id === id})
    this.currentProductId = id;

    // populate the form with selected product info
    this.form.setValue({
      pName: currentProduct.pName,
      desc: currentProduct.desc,
      price: currentProduct.price
    });

    // update button value as 'update' instead of 'add'
    this.editMode = true; 
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}



