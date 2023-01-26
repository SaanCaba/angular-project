import { Component, Output } from '@angular/core';
import { Product } from './product.model';
import { AuthService } from './services/auth.service';
import { StoreService } from './services/store.service';
import { TokenService } from './services/token.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent = '../assets/images/greenshoes.png'
  prueba=''
  showIMG = true
  showCart: boolean = false;
  onLoaded(img : string){
    console.log('loaded padre!', img)
  }
  openCart: boolean = false;
  constructor(
    private storeService : StoreService,
    private tokenService : TokenService,
    private authService : AuthService,
    private usersService: UsersService
  ){

  }
  ngOnInit():void{
    // console.log(this.storeService.clickCart())
  }
  clickCart(value: any){
    this.showCart = value;
  }

  onScroll(e:Event){
    const element = e.target as HTMLElement
    console.log(element.scrollTop)
  }

  createUser(){
    this.usersService.createUser({
      name:"Santi",
      email:"daoskdosad@gmail.com",
      password:"pepeargento"
    })
    .subscribe(response => {
      console.log(response)
    }, error => {
      alert(error)
    })
  }

  login(){
    this.authService.login('daoskdosad@gmail.com', "pepeargento")
    .subscribe(response => {
      console.log(response.access_token)
      window.localStorage.setItem('userToken', response.access_token)
    }, error => {
      alert(error)
    })
  }

}
