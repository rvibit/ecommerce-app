import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {FETCH_PRODUCTS} from '@src/constants/endpoints';

type ProductState = {
  products: Product[];
  loading: boolean;
};
export type Product = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
};

const initialState: ProductState = {
  products: [],
  loading: false,
};

const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch(FETCH_PRODUCTS);
      const data = await response.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.loading = false;
    });
  },
});

const {reducer} = productsSlice;
export {fetchProducts};
export default reducer;
