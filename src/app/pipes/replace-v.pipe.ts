import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceV'
})
export class ReplaceVPipe implements PipeTransform {

  transform(value: string): string {
      let newValue:string = '';
      for(let i = 0; i < value.length; i++){
        if(value[i].toLowerCase() === 'a'){
          newValue += '4'
          continue
        }
        if(value[i].toLowerCase() === 'e'){
          newValue += '3'
          continue
        }
        if(value[i].toLowerCase() === 'i'){
          newValue += '1'
          continue
          
        }
        if(value[i].toLowerCase() === 'o'){
          newValue += '0'
          continue
          
        }
        if(value[i].toLowerCase() === 'u'){
          newValue += '()'
          continue

        }
        newValue += value[i]
      }
      return newValue
  }

}
