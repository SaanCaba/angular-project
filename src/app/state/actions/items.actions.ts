import { createAction, props } from "@ngrx/store";
import { ItemModel } from "src/app/item.model";
import { Product } from "src/app/product.model";

export const loadItems = createAction(
    '[Item List] Load Articles', // type de la action
)

export const loadedItems = createAction(
    '[Item List] Loaded success',
    props<{products : Product[]}>()
)