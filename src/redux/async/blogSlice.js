// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

export const fetchblogs = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(`${API_URL}/blogs  `, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-apikey': '98423181-6712-46ce-9a92-260d8932dd03',
    },
  });
  return response.data;
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    isSuccess: false, // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchblogs.pending, (state) => {
        state.isSuccess = false;
      })
      .addCase(fetchblogs.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.error = null;
        state.blogs = action.payload;
      })
      .addCase(fetchblogs.rejected, (state, action) => {
        state.isSuccess = false;
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
