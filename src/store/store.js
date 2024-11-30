import { configureStore } from '@reduxjs/toolkit';

import articleReducer from './article/articleSlice';
import cartReducer from './cart/cartSlice';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    article: articleReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
