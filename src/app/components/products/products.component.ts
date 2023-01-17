import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { addItems, increment } from 'src/app/state/actions/items.actions';
import { AppState } from 'src/app/state/app.state';
import { selectItems } from 'src/app/state/selectors/items.selector';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  items$: Observable<any> = new Observable()
  myCartProducts : Product[] = [];
  price: number = 0
  products : Product[] = []
  today  = new Date();
  date = new Date(2021, 1 ,21)

  constructor(
    private storeService: StoreService,
    private productsService : ProductsService,
    private store: Store<AppState>
  ){
    this.myCartProducts = storeService.getShoppingCart()
  }
  addToCount(){
    this.store.dispatch(increment());
  }
  ngOnInit(): void{
    // se dispara una acción!
    this.items$ = this.store.select(selectItems)
    this.productsService.getAllProducts()
    .subscribe(data => {
     this.products = data;
     this.store.dispatch(addItems(
      {items: data}
     ))
    })
  }

  onAddToCart(product : Product){
    console.log(product)
    this.storeService.addProduct(product)
    this.price = this.storeService.getTotal()
  }
}
