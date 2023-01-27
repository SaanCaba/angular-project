import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl : string = 'https://damp-spire-59848.herokuapp.com/api/auth';

  constructor(
    private http: HttpClient,
    private token: TokenService
  ) { }

  login(name: string, email:string , password:string){
    return this.http.post<Auth>(this.apiUrl + '/login', {
      name,email, password
    }).pipe(
      tap(response =>this.token.saveToken(response.access_token))
    )
  }
  profile(){
    // const headers  = new HttpHeaders();
    // headers.set('Authorization', 'Bearer ' + token)
    return this.http.get<User>(this.apiUrl + '/profile',{
      // headers:{
      //   Authorization: 'Bearer ' + token
      // }
    }
     )
  }
}
