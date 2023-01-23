import { Component, Output } from '@angular/core';
import { Product } from './product.model';
import { StoreService } from './services/store.service';

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
    private storeService : StoreService
  ){

  }
  ngOnInit():void{
    // console.log(this.storeService.clickCart())
  }
  clickCart(value: any){
    this.showCart = value;
  }
  register = {
    name : '',
    email: '',
    password: ''
  }
  newName = ''
  name = 'Santi';
  edad = 21
  img = 'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80'
  btnDisabled = true
  person = {
    nombre : 'santi',
    edad:21,
    avatar: 'https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80'
  }
  nombres : string[] = ['santiago','pepe','axel', 'daniel', 'simba']
  pruebaE(){
    return console.log('first')
  }
  toggleButton(){
    if(this.btnDisabled === true){
      return this.btnDisabled = false
    }
   return this.btnDisabled = true
  }
  incrementarEdad(){
    return this.edad += 1
  }
  onScroll(e:Event){
    const element = e.target as HTMLElement
    console.log(element.scrollTop)
  }
  onInputName(e:Event){
    const element = e.target as HTMLInputElement
    this.person.nombre = element.value
    console.log(element.value)
  }
  pruebaaa(){
    alert('dasd')
  }
  addName(){
    this.nombres.push(this.newName)
    this.newName = ''
  }
  deleteName(i : number){
    this.nombres.splice(i, 1);
  }
  onRegister(){
    console.log(this.register)
  }

  toogleImg(){
    this.showIMG = !this.showIMG
  }

}
