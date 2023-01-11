import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';

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
  @Input() price = 0
}
