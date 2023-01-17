import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart : Product[] = []
  private myCart = new BehaviorSubject<Product[]>([]);
  openCart : boolean = false;
  // public totalPriceCart= new BehaviorSubject<number>(0);
  myCart$ = this.myCart.asObservable();
  totalPrice: number = 0;

  addProduct(product: Product){
    this.myShoppingCart.push(product)
    this.myCart.next(this.myShoppingCart)
    this.totalPrice = this.myShoppingCart.reduce((a,v) => a + v.price ,0);
    }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){
    return  this.myShoppingCart.reduce((a,v) => a + v.price ,0)
  }

  clickCart(){
    this.openCart = !this.openCart
    return this.openCart
  }


}
