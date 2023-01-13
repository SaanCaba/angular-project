import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer, ItemState } from "./reducer/items.reducer";

export interface AppState{
    items: ItemState
}


export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    items: itemsReducer
}