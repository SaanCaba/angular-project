import { ActionReducerMap } from "@ngrx/store";
import { ItemState } from "../models/item.state";
import { counterReducer } from "./reducer/items.reducer";

export interface AppState{
    AppState: ItemState
}


export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
    AppState: counterReducer
}