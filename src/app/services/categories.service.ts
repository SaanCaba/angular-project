import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Categories{
  id:number,
  name:string,
  typeImg:string
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }
  private apiUrl : string = 'https://damp-spire-59848.herokuapp.com/api/categories/'

  getCategories(){
    return this.http.get<Categories[]>(this.apiUrl)
  }

}
