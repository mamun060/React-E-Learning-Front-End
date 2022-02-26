import {  createSlice } from "@reduxjs/toolkit";
import userImg from '../../src/Assets/images/user-img/user_img.png';

const initialState = {
    auth: true,
    user: {
        role: 3,
        loggedIn: true,
        name:'Jahin',
        email:'mdalauddinjahin365@gmail.com',
        mobile:'01762192067',
        image: userImg,
        token: null,
    }
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, {payload}) => {
            // auth logic
        },
        register: (state) => {
            // auth logic
        },
        logout: (state,{payload}) => {
            // auth logic
            state.auth = false;
            state.user = payload;
        }
    },
});

export const { login, register, logout } = authSlice.actions;
export const getAuthUser = (state) => state.auth;

export default authSlice.reducer;
