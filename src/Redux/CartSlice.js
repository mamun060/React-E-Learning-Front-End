import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
    quantity: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            state.courses.push(payload);
            state.quantity  += 1;
            state.total     += payload.price * payload.quantity;
        },
        resetCart: (state) => {
            state.courses   = [];
            state.quantity  = 0;
            state.total     = 0;
        },
        removeFromCart:(state,{payload}) => {
            const oldCourses    = state.courses.length;
            const currentCourse = state.courses.filter(item => item.id === payload.id)[0] ?? null;
            const updatedCart   = state.courses.filter((item) => item.id !== payload.id);
            state.courses       = updatedCart;

            if (currentCourse && updatedCart.length < oldCourses){
                state.quantity  -= 1;
                state.total     -= currentCourse.price * currentCourse.quantity;
            }
        }
    },
});

export const { addToCart, resetCart, removeFromCart } = cartSlice.actions;
export const getAllCartItems = (state) => state.cart;

export default cartSlice.reducer;
