import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product} from './productSlice';

type CartState = {
  cart: Record<number, CartItem>;
  total: number;
};
export type CartItem = Product & {
  qty: number;
};

const initialState: CartState = {
  cart: {},
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartItem>) => {
      if (action.payload.qty === 0) {
        delete state.cart[action.payload.id];
      } else {
        state.cart[action.payload.id] = action.payload;
      }
      state.total = getTotal(state.cart);
    },
  },
});

function getTotal(cartObj: Record<number, CartItem>) {
  let total = 0;
  for (const key in cartObj) {
    total += cartObj[key].price * Number(cartObj[key].qty);
  }
  return Number(total.toFixed(2));
}

const {reducer, actions} = cartSlice;
export const {addProduct} = actions;
export default reducer;
