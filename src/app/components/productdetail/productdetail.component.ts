import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  @Input() productDetail : Product = {
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


}
