import { AfterViewInit, Component, EventEmitter ,Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent  {
  img: string = ''

  @Input('img')
  set changeImg(newImg:string){
    this.img = newImg
    console.log('ONLY CHANGE IMG', newImg)
    // con el set de acá SOLO ESCUCHO LOS CAMBIOS EN EL IMG
  }

 @Input() tested: string = ''
 @Input() productImg : string = '';
 @Input() productAlt : string = ''

 constructor(){
}

 @Output() loaded = new EventEmitter<string>() 
//  counter = 0;
//  counterFn: number | undefined;
  ngOnInit(){
    if(this.productImg.length === 0 || this.productImg === undefined || this.productImg === 'string'){
      this.productImg = "https://i.pinimg.com/474x/88/c6/43/88c643c969e350f687f724e9742733c9.jpg";
    }
  }
  imageDefault = 'pepe'

  imgError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('loaded!')
    this.loaded.emit(this.img)
  }
}
