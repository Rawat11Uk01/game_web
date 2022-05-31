import { configureStore } from "@reduxjs/toolkit";
import apiReducer from './apiSlice/apiSlice'

const store = configureStore({
    reducer: {
        api: apiReducer,
    }
});


export default store;