import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, map, subscribeOn } from 'rxjs';
import { Product } from "../model/products";

@Injectable({providedIn: "root"})
export class ProductService {
	error = new Subject<string>();
 
	constructor(private http: HttpClient) {}

	createProduct(products: {pName: string, desc: string, price: string}) {
		// const HEADERS = new HttpHeaders({'testHeader': 'DilamEkta'});
    this.http.post<{name: string}>("https://angularpracticeoct2023-default-rtdb.firebaseio.com/products.json", 
    products)
    	.subscribe((res)=>{
      	console.log(res);
    	}, (err) => {
				this.error.next(err.message);
			});
	}

	fetchProduct() {
		const header = new HttpHeaders()
		.set('content-type', 'application/json')
		.set('Access-Control-Allow-Origin', '*')

		const params = new HttpParams().set('print', 'pretty');

    return this.http.get<{[key: string]: Product}>("https://angularpracticeoct2023-default-rtdb.firebaseio.com/products.json", {'headers': header, 'params': params})
    .pipe(map((res)=>{
      const products = [];
      for(const key in res) {
        if (res.hasOwnProperty(key)) {
          products.push({...res[key], id: key})
        }
      }
      return products;
    }))
	}

	deleteProduct(id: string) {
		this.http.delete("https://angularpracticeoct2023-default-rtdb.firebaseio.com/products/"+id+".json")
    .subscribe();
	}

	deleteAllProduct() {
		this.http.delete("https://angularpracticeoct2023-default-rtdb.firebaseio.com/products.json")
    .subscribe();
	}

	editProduct(id: string, product: Product) {
		this.http.put("https://angularpracticeoct2023-default-rtdb.firebaseio.com/products/"+id+".json", product)
		.subscribe();
	}
}