import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Input() product: Product = {
    title :'',
    image: '',
    price : 0,
    description: ''
  }
  totalPrice:number = 0;
  constructor(
    private storeService: StoreService
  ){
    // this.totalPrice = this.storeService.totalPriceCart;
  }
  
  ngOnInit(){
    console.log(this.totalPrice)
  }
  
}
