import { createSlice } from "@reduxjs/toolkit";
import { en, ru } from "../../utils/lan/lan";

const initialState = en;

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    toggle(state) {
      if (state.lan === "ru") {
        Object.assign(state, en);
      } else {
        Object.assign(state, ru);
      }
    },
  },
  selectors: {},
});

export const { toggle } = contentSlice.actions;
//export const {} = contentSlice.selectors;
export const reducer = contentSlice.reducer;
