import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
    name: 'Favourite',
    initialState: [],
    reducers: {
        addToFavourite: (state, actions) => {
            state.push({ ...actions.payload });
        },
        removeFromFavourite: (state, actions) => {
            const newList = state.filter((value) => value.name !== actions.payload.name);
            return (state = newList);
        }
    }
})

export const { addToFavourite, removeFromFavourite } = FavouriteSlice.actions;

export default FavouriteSlice.reducer;
