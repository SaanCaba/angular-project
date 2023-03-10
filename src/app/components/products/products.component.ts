import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
import { addItems, increment } from 'src/app/state/actions/items.actions';
import { AppState } from 'src/app/state/app.state';
import { selectItems } from 'src/app/state/selectors/items.selector';
import { CreateProductDTO, Product } from '../product/product.model';
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
  @Input() products: Product[] = [];
  @Output() loadData = new EventEmitter();
  myCartProducts : Product[] = [];
  price$:Observable<any> = new Observable()
  productsLoaded : boolean = false;
  today  = new Date();
  date = new Date(2021, 1 ,21)
  showDetail: boolean = false;
  statusDetail : 'loading' | 'success' | 'error' | 'init' = 'init';
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

  onAddToCart(product : Product){
    this.storeService.addProduct(product)
  }

  toggleProductDetail(value:string){
    this.statusDetail = 'loading';
    this.productsService.getDetailOfProduct(value)
    .subscribe(data => {
      this.productChoosen = data
      this.statusDetail = 'success'
    }, error => {
      console.log(error.error.message)
      alert(error.error.message)
      this.statusDetail = 'error'
    })
    this.onCloseDetail();
  }
  onCloseDetail(){
    this.showDetail = !this.showDetail;
  }

  createNewProduct(){
    const product : CreateProductDTO = {
      title:'dsad',
      price: 110,
      images:[`https://placeimg.com/640/480/any?random=${Math.random()}`],
      description: 'dsadsaxsadsad',
      categoryId:2
    }
    this.productsService.createProduct(product)
    .subscribe(data => {
      console.log(data)
      this.products = [data, ...this.products]
    })
  }

  chargeMoreProducts(){
    this.loadData.emit();
  }

}
