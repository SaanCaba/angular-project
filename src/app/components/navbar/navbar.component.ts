import { Component, EventEmitter, Output } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() cart = new EventEmitter<boolean>()
  showMenu = false;
  counter = 0;
  constructor(
    private storeService : StoreService
  ){

  }
  ngOnInit():void{
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length
    })
    console.log('pepe')
  }
  toggleMenu(){
    console.log(this.showMenu)
    this.showMenu = !this.showMenu
  }
  openCart(){
    this.showMenu = this.storeService.clickCart();
    // console.log(this.cart)
    // this.cart.emit(this.showMenu)
    // console.log(this.cart.emit(this.showMenu))
    console.log(this.showMenu)
  }
  callParent(){
    alert("Send info to parent")
    this.cart.emit()
  }
}
