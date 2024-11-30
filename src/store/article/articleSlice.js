import { fetchArticle } from '../../services/article';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  article: null,
  loading: false,
};
export const getArticle = createAsyncThunk('article/getArticle', async () => {
  const response = await fetchArticle();
  return response;
});

const articleSlice = createSlice({
  name: 'article',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.article = action.payload;
        state.loading = false;
      });
  },
});

export default articleSlice.reducer;
