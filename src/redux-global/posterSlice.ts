'use client';

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Photos {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

type PosterState = {
  list: Photos[];
  loading: boolean;
  error: string | null;
}


const initialState: PosterState = {
  list: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk<Photos[], undefined, { rejectValue: string }>(
  'posters/fetchPosts',
  async function (_, { rejectWithValue }) {
    const CLIENT_ID = 'VrI8-8QSPQdU9-q26rt5IZjgaSbluQzSDc1mFsKnewo';
    const count = 20;
    const response = await fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${CLIENT_ID}`)
    if (!response.ok) {
      return rejectWithValue('Server Error')
    }
    const data = await response.json();
    return data;
  }
);

export const posterSlice = createSlice({
  name: 'posters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
  }
});
