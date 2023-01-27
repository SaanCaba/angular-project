import { Component, Output } from '@angular/core';
import { Product } from './product.model';
import { AuthService } from './services/auth.service';
import { FilesService } from './services/files.service';
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
  img:string='';
  onLoaded(img : string){
    console.log('loaded padre!', img)
  }
  openCart: boolean = false;
  constructor(
    private storeService : StoreService,
    private tokenService : TokenService,
    private authService : AuthService,
    private usersService: UsersService,
    private filesService : FilesService
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
  downloadFile(){
    this.filesService.getFile("my.pdf", "https://young-sands-07814.herokuapp.com/api/files/dummy.pdf", "application/pdf")
    .subscribe()
  }

  onUpload(e : Event){
    const element = event?.target as HTMLInputElement;
    const file = element.files?.item(0)
    if(file){
      this.filesService.uploadFile(file)
      .subscribe(rta => {
        this.img = rta.location
      })
    }
  }
}
