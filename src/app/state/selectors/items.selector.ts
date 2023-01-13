import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ItemState } from "../reducer/items.reducer";


export const selectItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
    selectItemsFeature,
    (state: ItemState) => state.items
)

export const selectLoading = createSelector(
    selectItemsFeature,
    (state: ItemState) => state.loading
)
