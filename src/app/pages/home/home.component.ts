import { Component } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products : Product[] = []
  limit:number = 10;
  offset: number = 0;
  errorMessage: string = '';
  constructor(
    private productsService: ProductsService
  ){

  }
  chargeProducts(){
    this.productsService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
     this.products = data;
    }, error =>{
      this.errorMessage = error.message
      console.log(error.message)
    })
  }
  loadMore(){
    this.offset += 1;
    this.productsService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
    
    this.products = this.products.concat(data);
    })
  }


  ngOnInit():void{
    this.chargeProducts()
  }
  
}
