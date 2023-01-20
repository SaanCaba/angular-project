import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product.model';
import { StoreService } from 'src/app/services/store.service';
import { AppState } from 'src/app/state/app.state';
import { selectMyCartProducts } from 'src/app/state/selectors/items.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() cart = new EventEmitter<boolean>()
  showMenu:boolean = false;
  counter: number = 0;
  showCart: boolean = false;

  constructor(
    private storeService : StoreService,
    private store: Store<AppState>
  ){

  }
  ngOnInit():void{
   let pepe  = this.store.select(selectMyCartProducts);
   pepe.subscribe(products   => {
    this.counter = products.length;
   });
   console.log(pepe)
  }
  toggleMenu(){
    console.log(this.showMenu)
    this.showMenu = !this.showMenu
  }
  openCart(){
    this.showCart = this.storeService.clickCart();
    this.cart.emit(this.showCart)
  }

}
