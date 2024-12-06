import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY= import.meta.env.API_KEY;

// Fetch testimonials with limit
export const fetchTestimonials = createAsyncThunk(
  'testimonials/fetchTestimonials',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/testimonials`, {
        params: { limit: 2 },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'x-api-key': API_KEY,
        },
      });
      return response.data.data; // Extract testimonials data
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch testimonials');
    }
  }
);

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState: {
    testimonials: [],
    isSuccess: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.isSuccess = false;
        state.error = action.payload || 'Failed to fetch testimonials';
      });
  },
});

export default testimonialSlice.reducer;
