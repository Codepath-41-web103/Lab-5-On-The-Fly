import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    customTheme: null,
  },
  reducers: {
    setCustomTheme: (state, action) => {
      state.customTheme = action.payload;
    },
  },
});

export const { setCustomTheme } = themeSlice.actions;

export const selectCustomTheme = (state) => state.theme.customTheme;

export default themeSlice.reducer;
