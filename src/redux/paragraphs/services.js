import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getParagraphs = createAsyncThunk(
  "paragraphs/getParagraphs",
  async ({ paras, format }) => {
    const res = await axios(
      `https://baconipsum.com/api/?type=all-meat&paras=${paras}&format=${format}`
    );
    return res.data.split("\n");
  }
);
