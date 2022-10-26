import { configureStore } from "@reduxjs/toolkit";
import paragraphsSlice from "./paragraphs/paragraphsSlice";

export const store = configureStore({
  reducer: {
    paragraphs: paragraphsSlice,
  },
});
