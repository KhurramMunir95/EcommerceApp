import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cart/CartItems";

const initialState = {
    cartItems: [],
    total: 0,
    count: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, {payload}) => {
            state.cartItems.push({
                id: payload.id,
                name: payload.name,
                img: payload.img,
                price: payload.price,
                count: 1,
            });
        },
        removeItem: (state) => {
            state.cartItems = state.cartItems.filter((item) => item.id!== payload.id);
        },
        cartTotal: (state) => {
            state.total = state.cartItems.reduce((acc, item) => acc + item.count * item.price, 0);
            state.count = state.cartItems.reduce((acc, item) => acc + item.count, 0)
        },
        increaseItem: (state, {payload}) => {
            const item = state.cartItems.find((item) => item.id === payload.id);
            item.count += 1;
        },
        decreaseItem: (state, {payload}) => {
            const item = state.cartItems.find((item) => item.id === payload.id);
            item.count--;
            state.cartItems = item.count === 0 ? state.cartItems.filter((cartItem) => cartItem.id!== item.id) : state.cartItems;
        }
    }
})

export const { addItem, removeItem, cartTotal, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;