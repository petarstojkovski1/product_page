import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCart, addToCart as addToCartService } from '../../services/cart';

const initialState = {
  totalCost: 0,
  totalItems: 0,
};

export const getCart = createAsyncThunk('cart/getCart', async () => {
  const response = await fetchCart();
  return response;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (payload) => {
  const response = await addToCartService(payload);
  return response;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.totalItems += 1;
      state.totalCost += action.payload.price;
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.totalItems = action.payload.totalItems;
        state.totalCost = action.payload.totalCost;
        state.loading = false;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.totalItems += action.payload.quantity;
        state.totalCost += action.payload.cost;
      });
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
