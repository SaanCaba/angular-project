import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent {
  @Input() product : Product = {
    title:'',
    price: 0,
    image:[],
    description: '',
    category: {
      id:0,
      name:'',
      typeImg:''
    }
  }
  amount :number = 1;
}
