import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { Product } from '../product/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  myCartProducts : Product[] = [];
  price: number = 0
  products : Product[] = []
  today  = new Date();
  date = new Date(2021, 1 ,21)

  constructor(
    private storeService: StoreService,
    private productsService : ProductsService
  ){
    this.myCartProducts = storeService.getShoppingCart()
  }

  ngOnInit(): void{
    this.productsService.getAllProducts()
    .subscribe(data => {
     this.products = data;
    })
  }

  onAddToCart(product : Product){
    console.log(product)
    this.storeService.addProduct(product)
    this.price = this.storeService.getTotal()
  }
}
