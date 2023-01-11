import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

 private myShoppingCart : Product[] = []
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  addProduct(product: Product){
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    return  this.myShoppingCart.reduce((a,v) => a + v.price ,0)
  }



}
