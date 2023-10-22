import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import FavouriteSlice from "./FavouriteSlice";

export const Store = configureStore({
    reducer: {
        CartSlice,
        FavouriteSlice
    }
})