import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

// Fetch blogs with pagination and search
export const fetchblogs = createAsyncThunk('blogs/fetchPosts', async ({ page = 1, limit = 10, search = '' }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/blogs`, {
      params: { page, limit, search },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': '98423181-6712-46ce-9a92-260d8932dd03',
      },
    });
    return response.data; // Expected to match the API response structure
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch blogs');
  }
});

// Fetch blog detail by ID
export const fetchblogDetail = createAsyncThunk('blogs/fetchPostDetail', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/blogs/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': '98423181-6712-46ce-9a92-260d8932dd03',
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch blog detail');
  }
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [], // List of blogs
    blog: {}, // Single blog detail
    isSuccess: false, // Request success status
    error: null, // Error messages
    pagination: {
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 0,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all blogs
      .addCase(fetchblogs.pending, (state) => {
        state.isSuccess = false;
      })
      .addCase(fetchblogs.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.error = null;
        state.blogs = action.payload.data || [];
        state.pagination.page = parseInt(action.payload.page, 10) || 1;
        state.pagination.limit = parseInt(action.payload.limit, 10) || 10;
        state.pagination.total = parseInt(action.payload.total, 10) || 0;
        state.pagination.totalPages = parseInt(action.payload.totalPages, 10) || 1;
      })
      .addCase(fetchblogs.rejected, (state, action) => {
        state.isSuccess = false;
        state.error = action.payload || 'Failed to fetch blogs';
      })
      // Fetch single blog detail
      .addCase(fetchblogDetail.pending, (state) => {
        state.isSuccess = false;
      })
      .addCase(fetchblogDetail.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.error = null;
        state.blog = action.payload || {};
      })
      .addCase(fetchblogDetail.rejected, (state, action) => {
        state.isSuccess = false;
        state.error = action.payload || 'Failed to fetch blog detail';
      });
  },
});

export default blogsSlice.reducer;
