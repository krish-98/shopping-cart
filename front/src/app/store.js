import { configureStore } from "@reduxjs/toolkit"
import productsReducer from "../features/productSlice/productSlice"
import cartReducer from "../features/cartSlice.js/cartSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
})
