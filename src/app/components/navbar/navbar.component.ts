import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Product } from 'src/app/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';
import { TokenService } from 'src/app/services/token.service';
import { UsersService } from 'src/app/services/users.service';
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
  userIsLogged: boolean = false;
  userInfo: User = {
    id: '',
    name : '',
    email: '',
    password : ''
  }
  // inputInfo : User = {
  //   id: 'dasd',
  //   name:'',
  //   password: '',
  //   email: '',
  // }

  constructor(
    private storeService : StoreService,
    private store: Store<AppState>,
    private authService: AuthService,
    private token: TokenService,
    private usersService: UsersService
  ){
    console.log(this.userIsLogged)
    if(window.sessionStorage.getItem('userToken')){
      console.log(window.sessionStorage.getItem('userToken'))
      console.log('first')
      this.userIsLogged = true;
      console.log(this.userIsLogged)
      if(window.sessionStorage.getItem('emailUser') !== null){}
      this.userInfo.email = window.sessionStorage.getItem('emailUser')
    }
    console.log(this.userIsLogged)

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

  createUser(){
    this.usersService.createUser({
      name: this.userInfo.name,
      email: this.userInfo.email,
      password : this.userInfo.password
    })
    .subscribe(response => {
      console.log(response)
    }, error => {
      alert(error)
    })
  }

  login(userInfo: User){
    console.log(userInfo)
    this.authService.login(userInfo.email, userInfo.password)
    .subscribe(response => {
      console.log(response.access_token)
      window.sessionStorage.setItem('userToken', response.access_token)
      window.sessionStorage.setItem('emailUser', userInfo.email)
      this.userIsLogged = true;
    }, error => {
      alert(error)
    })

    
  }

  logout(){
    window.sessionStorage.removeItem('userToken')
    window.sessionStorage.removeItem('emailUser') 
    this.userIsLogged = false;
  }
  getProfile(){
    this.authService.profile(window.sessionStorage.getItem('userToken'))
    .subscribe(profile => {
      console.log(profile)
    });
  }

}
