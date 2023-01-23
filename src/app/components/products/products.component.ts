import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { addItems, increment } from 'src/app/state/actions/items.actions';
import { AppState } from 'src/app/state/app.state';
import { selectItems } from 'src/app/state/selectors/items.selector';
import { Product } from '../product/product.model';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent {
  items$: Observable<any> = new Observable()
  products: Product[] = [];
  myCartProducts : Product[] = [];
  price$:Observable<any> = new Observable()
  productsLoaded : boolean = false;
  today  = new Date();
  date = new Date(2021, 1 ,21)
  showDetail: boolean = false;
  productChoosen: Product = {
    id: undefined,
    title:'',
    price: 0,
    images:[],
    description: '',
    category:{
      id: 0,
      typeImg: '',
      name:''
    }
  }
  x : any = [];
  constructor(
    private storeService: StoreService,
    private productsService : ProductsService,
    private store: Store<AppState>
  ){
    
    this.myCartProducts = this.storeService.getShoppingCart()
  }
  addToCount(){
    this.store.dispatch(increment());
  }
  ngOnInit(): void{
  
  // this.items$ = this.store.select(selectItems)
  // se dispara una acción!

    this.productsService.getAllProducts()
    .subscribe(data => {
     this.products = data;
    //  this.store.dispatch(addItems(
    //   {items: data}
    //  ))
    })
  }

  onAddToCart(product : Product){
    // console.log(product)
    this.storeService.addProduct(product)
  }

  toggleProductDetail(value: {menu: boolean, id: string}){
    this.showDetail = value.menu;
    this.productsService.getDetailOfProduct(value.id)
    .subscribe(data => 
      this.productChoosen = data
    )
  }

}
