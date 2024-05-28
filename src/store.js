import { configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product/productSlice';
import cartRedcuer from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartRedcuer,
        products: productReducer,
    }
})