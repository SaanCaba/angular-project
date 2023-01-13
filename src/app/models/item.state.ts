import { Product } from "../product.model"

export interface ItemState{
    loading: boolean
    items: ReadonlyArray<Product>
}