import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { loadItems } from 'src/app/state/actions/items.actions';
import { selectLoading } from 'src/app/state/selectors/items.selector';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  loading$: Observable<boolean> = new Observable()
  myCartProducts : Product[] = [];
  price: number = 0
  products : Product[] = []
  today  = new Date();
  date = new Date(2021, 1 ,21)

  constructor(
    private storeService: StoreService,
    private productsService : ProductsService,
    private store: Store
  ){
    this.myCartProducts = storeService.getShoppingCart()
  }

  ngOnInit(): void{
    // se dispara una acción!
    this.loading$ = this.store.select(selectLoading)
    
    this.store.dispatch(loadItems())
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
