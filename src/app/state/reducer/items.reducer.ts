import { createReducer, on } from "@ngrx/store";
import { Product } from "src/app/product.model";
import { loadItems } from "../actions/items.actions";

export interface ItemState{
    loading: boolean,
    items: ReadonlyArray<any>
}

export const initialState : ItemState = {
    loading: false,
    items: []
};

export const itemsReducer = createReducer(
    initialState,
    on(loadItems, (state) => {
        return {
            ...state,
            loading: true
        }
    })
)