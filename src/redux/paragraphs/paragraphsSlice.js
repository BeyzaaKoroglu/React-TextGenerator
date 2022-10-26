import { createSlice } from "@reduxjs/toolkit";
import { getParagraphs } from "./services";

export const paragraphsSlice = createSlice({
  name: "paragraphs",
  initialState: {
    paragraphs: [],
  },
  reducers: {},
  extraReducers: {
    [getParagraphs.fulfilled]: (state, action) => {
      state.paragraphs = action.payload;
    },
  },
});

export default paragraphsSlice.reducer;
