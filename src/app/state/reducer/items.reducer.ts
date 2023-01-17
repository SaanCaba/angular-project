import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { ItemState } from 'src/app/models/item.state';
import { increment, decrement,reset, addItems, calculatePrice, addItemToCart } from '../actions/items.actions';

export const initialState : ItemState = {
    items: [],
    totalPrice: 0,
    myCart : []
};

export const counterReducer = createReducer(
  initialState,
  on(addItems, (state, props) => {
    return {
        ...state,
        items: props.items
    }

  }),
  on(calculatePrice, (state) => {
    return{
      ...state,
      totalPrice: state.myCart.reduce((a,v) => a + v.price ,0)
    }
  }),
  on(addItemToCart, (state, props) => {
    return {
      ...state,
      myCart : [...state.myCart, props.item]
    }
  } )
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