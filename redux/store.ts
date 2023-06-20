import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "@/redux/slices/navigationSlice";
import dateRangeReducer from "./slices/dateRangeSlice";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    dateRange: dateRangeReducer,
  },
});

export default store;
