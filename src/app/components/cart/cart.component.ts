import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/product.model';
import { StoreService } from 'src/app/services/store.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { calculatePrice } from 'src/app/state/actions/items.actions';
import { selectMyCartProducts, selectTotalPrice } from 'src/app/state/selectors/items.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  @Output() cart = new EventEmitter<boolean>()
  @Input() product: Product = {
    title :'',
    image: '',
    price : 0,
    description: ''
  }
  totalPrice$ : Observable<any> = new Observable();
  myCartProducts$ : Observable<any> = new Observable();
  showMenu  : boolean = this.storeService.openCart;
  constructor(
    private storeService: StoreService,
    private store : Store<AppState>
  ){
    // this.totalPrice = this.storeService.totalPriceCart;
  }
  
  ngOnInit(){
    this.store.dispatch(calculatePrice())
    this.totalPrice$ = this.store.select(selectTotalPrice)
    console.log(this.myCartProducts$)
    this.myCartProducts$ = this.store.select(selectMyCartProducts);
    console.log(this.myCartProducts$)
  }

  closeCart(){
    this.showMenu = this.storeService.clickCart();
    this.cart.emit(this.showMenu)
  }
  
}
