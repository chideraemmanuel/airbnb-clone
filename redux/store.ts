import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "@/redux/slices/navigationSlice";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
