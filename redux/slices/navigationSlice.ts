import { createSlice } from "@reduxjs/toolkit";
import { NavigationStateTypes } from "../types";

const initialState: NavigationStateTypes = {
  isTopRightNavActive: true,
};

const navigationSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleTopRightNav: () => {
      console.log("toggle");
    },
  },
});

export const { toggleTopRightNav } = navigationSlice.actions;

export default navigationSlice.reducer;
