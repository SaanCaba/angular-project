import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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
  }
  toggleMenu(){
    console.log(this.showMenu)
    this.showMenu = !this.showMenu
  }
}
