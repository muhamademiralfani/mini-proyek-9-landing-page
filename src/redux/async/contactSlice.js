import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.API_KEY;

// POST contact data
export const postContact = createAsyncThunk(
  'contact/postContact',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/contact`, formData, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
      });
      return response.data; // Response expected from API
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to send contact form');
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    isSuccess: false,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postContact.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(postContact.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.error = null
      })
      .addCase(postContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload || 'Failed to send contact form';
      });
  },
});

export default contactSlice.reducer;
