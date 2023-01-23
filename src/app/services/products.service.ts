import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl : string = 'https://young-sands-07814.herokuapp.com/api/products/'
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
   return this.http.get<Product[]>(this.apiUrl);
  }

  getDetailOfProduct(id: string){
    return this.http.get<Product>(this.apiUrl + id)
  }
}
