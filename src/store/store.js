import { configureStore } from '@reduxjs/toolkit';

import articleReducer from './article/articleSlice';
import cartReducer from './cart/cartSlice';

const store = configureStore({
  reducer: {
    article: articleReducer,
    cart: cartReducer,
  },
});

export default store;
