import {createSelector} from '@ngrx/store';
import { ItemState } from 'src/app/models/item.state';

import { AppState } from '../app.state';

//todo el estado
export const selectStateFeature = (state: AppState) => state.AppState;

// me trae unicamente el counter
export const selectItems = createSelector(
    selectStateFeature,
    (state:ItemState) => state.items 
)

export const selectTotalPrice = createSelector(
    selectStateFeature,
    (state:ItemState) => state.totalPrice 
)

export const selectMyCartProducts = createSelector(
    selectStateFeature,
    (state: ItemState) => state.myCart
)
