import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  fetchFavorites,
  setFavorite as setFavoriteService,
} from '../../services/user';

const initialState = {
  favorites: null,
  loading: false,
};
export const getFavorites = createAsyncThunk('user/getFavorites', async () => {
  const response = await fetchFavorites();
  return response;
});

export const setFavorite = createAsyncThunk(
  'user/setFavorite',
  async (payload) => {
    const response = await setFavoriteService(payload);
    return response;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.loading = false;
      })
      .addCase(setFavorite.fulfilled, (state, action) => {
        const containsId = state.favorites.some(
          (item) => item === action.payload
        );
        if (containsId) {
          state.favorites = state.favorites.filter(
            (item) => item !== action.payload
          );
        } else {
          state.favorites.push(action.payload);
        }
        state.loading = false;
      });
  },
});

export default userSlice.reducer;
