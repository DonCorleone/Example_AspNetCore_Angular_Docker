import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private url = 'http://localhost/api/';
// Docker  private url = 'http://localhost:5000/api/';

  constructor(private _http: Http) { }

  getProducts() {
    return this._http.get(this.url + 'products')
                     .map((resp: Response) => resp.json())
                     .catch(this.handleError);

  }

  insertProduct(obj: Product) {
    return this._http.post(this.url + 'products', obj)
                     .map((resp: Response) => resp.json())
                     .catch(this.handleError);

  }

  updateCustomer(obj: Product) {
    return this._http.put(this.url + 'products/' + obj.id, obj)
                .map((response: Response) => response.json())
                .catch(this.handleError);
  }

  handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
  }

}

export class Product {
  public id: any;
  public productId: number;
  public productName: string;
  public price: number;
  public category: string;
}
