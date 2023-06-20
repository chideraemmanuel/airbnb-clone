import { createSlice } from "@reduxjs/toolkit";
import { DateRangeTypes } from "../types";
import { format } from "date-fns";

const initialState: DateRangeTypes = {
  range: [
    {
      //   startDate: format(new Date(), "MM/dd/yyy"),
      //   startDate: new Date(),
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ],
};

const dateRangeSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setRange: (state, action) => {
      console.log("action", action);
      state.range = action.payload;
    },
  },
});

export const { setRange } = dateRangeSlice.actions;

export default dateRangeSlice.reducer;
