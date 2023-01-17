import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreService } from 'src/app/services/store.service';
import { addItemToCart, calculatePrice } from 'src/app/state/actions/items.actions';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // @Input('product') product!:Product 
  @Output() addedProduct = new EventEmitter<Product>();
  @Input() product : Product = {
    title:'',
    price: 0,
    image:'',
    description: ''
  }
  constructor(
    private storeService : StoreService,
    private store : Store
  ){
    
  }
  addProduct(){
    this.store.dispatch(addItemToCart({item : this.product}))
    this.store.dispatch(calculatePrice());
  }
  

}
