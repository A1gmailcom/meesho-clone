import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
