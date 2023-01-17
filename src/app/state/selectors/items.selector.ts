import {createSelector} from '@ngrx/store';
import { ItemState } from 'src/app/models/item.state';

import { AppState } from '../app.state';

//todo el estado
export const selectCounterFeature = (state: AppState) => state.AppState;

// me trae unicamente el counter
export const selectItems = createSelector(
    selectCounterFeature,
    (state:ItemState) => state.items 
)
