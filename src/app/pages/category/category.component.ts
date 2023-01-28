import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categoryId: string | null = null;
  limit:number=10;
  offset:number= 0;
  products: Product[] = []
  constructor(
    private route: ActivatedRoute,
    private productService : ProductsService
  ){

  }
  ngOnInit():void{
    // obtenemos el id del parametro de la url.
    this.route.paramMap
    .pipe(
      switchMap(params => {
        this.categoryId = params.get('id')
        if(this.categoryId){
        return this.productService.getProductByCategory(this.categoryId, this.offset,this.limit)
        }
        return [];
      })
      
    ).subscribe(data => {
      this.products = data;
    })
    
  }
  loadMore(){
    this.offset += 1;
    this.productService.getProductsByPage(this.limit, this.offset)
    .subscribe(data => {
    
    this.products = this.products.concat(data);
    })
  }

}
