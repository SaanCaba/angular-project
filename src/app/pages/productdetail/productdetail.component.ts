import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  detailId : string | null='';
  product : Product = {
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
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ){}
  ngOnInit():void{
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.detailId = params.get('id')
        if(this.detailId){
        return this.productService.getDetailOfProduct(this.detailId)
        }
        return [];
      })
    ).subscribe(data => {
      this.product = data;
    })
    }

    goBack(){
      
    }
}
