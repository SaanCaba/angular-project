import { createAction, props } from '@ngrx/store';
import { ItemState } from 'src/app/models/item.state';
import { Product } from 'src/app/product.model';

export const addItems = createAction(
    '[Products Component] Get Items', 
    props<{items: Product[]}>()
)

export const increment = createAction(
    '[Counter Component] Increment',
    );
export const decrement = createAction(
    '[Counter Component] Decrement',
    props<{message: string}>()
    );
export const reset = createAction('[Counter Component] Reset');