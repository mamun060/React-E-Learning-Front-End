import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishCount       : 0,
    wishListItems   : []
};

const WishSlice = createSlice({
    name:'wish',
    initialState,
    reducers:{
        addToWish: (state, {payload})=>{
            state.wishCount += 1;
            state.wishListItems.push(payload);
            localStorage.setItem('wishItems', JSON.stringify(state.wishListItems));
        },
        removeFromWish: (state, { payload })=>{
            const oldItems      = state.wishListItems.length;
            const updatedWish   = state.wishListItems.filter((item) => item.id !== payload.id);
            state.wishListItems = updatedWish;

            const currentItem   = state.wishListItems.filter(item => item.id === payload.id)[0] ?? null;
            localStorage.setItem('wishItems', JSON.stringify(updatedWish));
            if (currentItem && updatedWish.length < oldItems) {
                state.wishCount -= 1;
            }
        },
        resetWish: (state) => {
            state.wishCount = 0;
            state.wishListItems = [];
        },
    }
})


export const { addToWish, removeFromWish, resetWish } = WishSlice.actions;

export const getAllWishItems = (state) => state.wish;

export default WishSlice.reducer;
