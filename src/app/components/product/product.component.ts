import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  addProduct(){
    this.addedProduct.emit(this.product)
  }

}
