import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-store";

const store = configureStore({
  reducer: productSlice,
});

export default store;
