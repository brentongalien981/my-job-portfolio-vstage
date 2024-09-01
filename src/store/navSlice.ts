// src/store/navSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavState {
  selectedLink: string;
}

const initialState: NavState = {
  selectedLink: '/',
};

const navSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setSelectedLink: (state, action: PayloadAction<string>) => {
      state.selectedLink = action.payload;
    },
  },
});

export const { setSelectedLink } = navSlice.actions;

export default navSlice.reducer;
