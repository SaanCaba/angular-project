import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { ItemState } from 'src/app/models/item.state';
import { increment, decrement,reset, addItems } from '../actions/items.actions';

export const initialState : ItemState = {
    items: []
};

export const counterReducer = createReducer(
  initialState,
  on(addItems, (state, props) => {
    console.log(props.items)
    return {
        ...state,
        items: props.items
    }

  }),
//   on(decrement, (state) => {
//     return {
//         ...state,
//         counter: state.counter - 1
//     }
//   }),
//   on(reset, (state) => {
//     return{
//         ...state,
//         counter: 0
//     }
//   })
);