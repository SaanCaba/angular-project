import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  saveToken(token:string){
    sessionStorage.setItem('userToken', token)
  }

  getToken(){
   const token = sessionStorage.getItem('userToken');
   return token
  }

  removeToken(){
    sessionStorage.removeItem('userToken')
  }
}
