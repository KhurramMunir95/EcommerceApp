import { createSlice } from "@reduxjs/toolkit";
import CartItems from '../../cart/CartItems'

const initialState = {
    products: CartItems
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, {payload}) => {
            state.products.push(payload);
        },
        decreaseQuantity: (state, {payload}) => {
            const item = state.products.find((product) => product.id === payload.id);
            item.stock > 0 && item.stock--;
        },
        increaseQuantity: (state, {payload}) => {
            const item = state.products.find((product) => product.id === payload.id);
            item.stock++;
        }
    }
})

export const { decreaseQuantity, increaseQuantity } = productSlice.actions;
export default productSlice.reducer;