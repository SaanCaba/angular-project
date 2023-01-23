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
  @Output() showdetailP = new EventEmitter();
  @Input() product : Product = {
    id: undefined,
    title:'',
    price: 0,
    images:[],
    description: '',
    category:{
      id: 0,
      typeImg: '',
      name:''
    }
  }
  showDetailProductB : boolean = false;
  constructor(
    private storeService : StoreService,
    private store : Store
  ){
  }
  ngOnInit(){
   
  }
  addProduct(){
    this.store.dispatch(addItemToCart({item : this.product}))
    this.store.dispatch(calculatePrice());
  }
  showDetailProduct(){
    console.log('pepe')
    this.showDetailProductB = !this.showDetailProductB;
    this.showdetailP.emit(this.product.id)
  }
  

}
