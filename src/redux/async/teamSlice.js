import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = import.meta.env.VITE_BASE_URL;
const API_KEY= import.meta.env.API_KEY;

// Fetch team data
export const fetchTeams = createAsyncThunk('teams/fetchTeams', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/teams?usernames[0]=rikkriuk&usernames[1]=emir&usernames[2]=desup321`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
    });
    return response.data.data; // Extract team data
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch teams');
  }
});

const teamSlice = createSlice({
  name: 'teams',
  initialState: {
    teams: [],
    isSuccess: false,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teams = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload || 'Failed to fetch teams';
      });
  },
});

export default teamSlice.reducer;
