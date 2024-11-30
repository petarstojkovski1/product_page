import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCart, addToCart as addToCartService } from '../../services/cart';

const initialState = {
  totalCost: 0,
  totalItems: 0,
  items: [],
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
        state.items = action.payload.items;
        // state.loading = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.totalItems += action.payload.count;
        state.totalCost += action.payload.item.price * action.payload.count;
        state.items.push(action.payload.item);
      });
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
