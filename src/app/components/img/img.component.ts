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
 @Input() productImg : string = ''
 @Input() productAlt : string = ''

 @Output() loaded = new EventEmitter<string>() 
//  counter = 0;
//  counterFn: number | undefined;

  imageDefault = 'pepe'

  imgError(){
    this.img = this.imageDefault;
  }
  imgLoaded(){
    console.log('loaded!')
    this.loaded.emit(this.img)
  }
}
