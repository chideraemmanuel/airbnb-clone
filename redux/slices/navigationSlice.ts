import { createSlice } from "@reduxjs/toolkit";
import { NavigationStateTypes } from "../types";

const initialState: NavigationStateTypes = {
  isTopRightNavActive: false,
};

const navigationSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleTopRightNav: (state) => {
      state.isTopRightNavActive = !state.isTopRightNavActive;
      // console.log("toggle");
    },
  },
});

export const { toggleTopRightNav } = navigationSlice.actions;

export default navigationSlice.reducer;
