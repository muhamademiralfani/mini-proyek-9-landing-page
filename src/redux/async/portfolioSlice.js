import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;

// Fetch portfolios with pagination and search
export const fetchPortfolios = createAsyncThunk('portfolios/fetchPosts', async ({ page = 1, limit = 10, search = '' }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/portfolios`, {
      params: { page, limit, search },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': '98423181-6712-46ce-9a92-260d8932dd03',
      },
    });
    return response.data; // Expected to match the API response structure
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch portfolios');
  }
});

// Fetch portfolio detail by ID
export const fetchPortfolioDetail = createAsyncThunk('portfolios/fetchPostDetail', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/portfolios/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': '98423181-6712-46ce-9a92-260d8932dd03',
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch portfolio detail');
  }
});

const portfoliosSlice = createSlice({
  name: 'portfolios',
  initialState: {
    portfolios: [], // List of portfolios
    portfolio: {}, // Single portfolio detail
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
      // Fetch all portfolios
      .addCase(fetchPortfolios.pending, (state) => {
        state.isSuccess = false;
      })
      .addCase(fetchPortfolios.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.error = null;
        state.portfolios = action.payload.data || []; // Assign portfolio list
        state.pagination.page = parseInt(action.payload.page, 10) || 1; // Ensure page is a number
        state.pagination.limit = parseInt(action.payload.limit, 10) || 10; // Ensure limit is a number
        state.pagination.total = parseInt(action.payload.total, 10) || 0; // Total records
        state.pagination.totalPages = parseInt(action.payload.totalPages, 10) || 1; // Total pages
      })
      .addCase(fetchPortfolios.rejected, (state, action) => {
        state.isSuccess = false;
        state.error = action.payload || 'Failed to fetch portfolios';
      })

      // Fetch single portfolio detail
      .addCase(fetchPortfolioDetail.pending, (state) => {
        state.isSuccess = false;
      })
      .addCase(fetchPortfolioDetail.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.error = null;
        state.portfolio = action.payload || {};
      })
      .addCase(fetchPortfolioDetail.rejected, (state, action) => {
        state.isSuccess = false;
        state.error = action.payload || 'Failed to fetch portfolio detail';
      });
  },
});

export default portfoliosSlice.reducer;
