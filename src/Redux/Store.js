import { configureStore } from "@reduxjs/toolkit";
import wishReducer from "./WishSlice";
import cartReducer from "./CartSlice";
import authReducer from "./AuthSlice";

const store = configureStore({
    reducer:{
        wish: wishReducer,
        cart: cartReducer,
        auth: authReducer,
    }
});

export default store;