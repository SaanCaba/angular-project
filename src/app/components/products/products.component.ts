import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
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
  price$:Observable<any> = new Observable()
  productsLoaded : boolean = false;
  today  = new Date();
  date = new Date(2021, 1 ,21)
  x : any = [];
  constructor(
    private storeService: StoreService,
    private productsService : ProductsService,
    private store: Store<AppState>
  ){
    this.myCartProducts = this.storeService.getShoppingCart()
  }
  addToCount(){
    this.store.dispatch(increment());
  }
  ngOnInit(): void{
  
  this.items$ = this.store.select(selectItems)
  this.items$.subscribe(data => { 
    this.x = data
    return console.log(this.x)
  })
  // se dispara una acción!

    this.productsService.getAllProducts()
    .subscribe(data => {
     this.store.dispatch(addItems(
      {items: data}
     ))
    })
  }

  onAddToCart(product : Product){
    // console.log(product)
    this.storeService.addProduct(product)
  }
}
