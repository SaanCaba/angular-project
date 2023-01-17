import { Product } from "../product.model";

export interface ItemState{
    items: Product[]
    totalPrice: number;
    myCart : Product[]
}