import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart : Product[] = []
  private myCart = new BehaviorSubject<Product[]>([]);
  // public totalPriceCart :any= new BehaviorSubject<number>(0);
  myCart$ = this.myCart.asObservable();

  addProduct(product: Product){
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
    // this.totalPriceCart = this.myShoppingCart.reduce((a,v) => a + v.price ,0)
    // console.log(this.totalPriceCart)
    }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    return  this.myShoppingCart.reduce((a,v) => a + v.price ,0)
  }



}
