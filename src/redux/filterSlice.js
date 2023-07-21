import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changedFilter: (_, action) => {
            return action.payload;
        }
    }
})

export const filterReducer = filterSlice.reducer;

export const { changedFilter } = filterSlice.actions;