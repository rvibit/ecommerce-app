import {combineReducers} from 'redux';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';

export const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});
