import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Product } from 'src/app/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { Categories, CategoriesService } from 'src/app/services/categories.service';
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
  categories: Categories[] = []
  userInfo: User = {
    id: '',
    name : '',
    email: '',
    password : ''
  }
  constructor(
    private storeService : StoreService,
    private store: Store<AppState>,
    private authService: AuthService,
    public token: TokenService,
    private usersService: UsersService,
    private categoriesService: CategoriesService
  ){
      this.userInfo.email = window.sessionStorage.getItem('emailUser')
  }
  ngOnInit():void{

   let myCartP  = this.store.select(selectMyCartProducts);
   myCartP.subscribe(products   => {
    this.counter = products.length;
   });
   this.categoriesService.getCategories()
   .subscribe(data =>{
    console.log(data)
    this.categories = data
   })
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
    this.authService.login(userInfo.name, userInfo.email, userInfo.password)
    .subscribe(response => {
      console.log(response.access_token)
      window.sessionStorage.setItem('emailUser', userInfo.email)
    }, error => {
      alert(error.message)
    })

    
  }

  logout(){
    this.token.removeToken()
    window.sessionStorage.removeItem('emailUser') 
  }
  getProfile(){
    this.authService.profile()
    .subscribe(profile => {
      console.log(profile)
      this.userInfo = profile;
    });
  }

}
