import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';
import { CreateProductDTO } from '../components/product/product.model';
import { checkTime } from '../interceptors/time.interceptor';
import { Product } from '../product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl : string = 'https://damp-spire-59848.herokuapp.com/api/products/'
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
   return this.http.get<Product[]>(this.apiUrl,{context:checkTime()})
   .pipe(
   catchError((error : HttpErrorResponse) =>{
    if(error.status === 500){
      return throwError(()=> new Error('Algo salió mal!'))
    }
    if(error.status > 400){
      return throwError(()=> new Error('Los productos no pueden ser cargados...'))
    }
    return throwError(()=> new Error('Algo salió mal...'))

   })
   );
  }
  //paginado
  getProductsByPage(limit:number, offset:number){
    return this.http.get<Product[]>(this.apiUrl, {
      params:{
        limit, offset
      },
      context:checkTime()
    });
  }

  getDetailOfProduct(id: string){
    return this.http.get<Product>(this.apiUrl + id)
  }
  createProduct(data: CreateProductDTO){
    return this.http.post<Product>(this.apiUrl, data)
    .pipe(
      catchError((error : HttpErrorResponse) =>{
       if(error.status === 500){
         return throwError(()=> new Error('Algo salió mal!'))
       }
       if(error.status > 400){
         return throwError(()=> new Error('Los productos no pueden ser cargados...'))
       }
       return throwError(()=> new Error('Algo salió mal...'))
   
      })
      );
  }
}
