import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        viewSearch : false,
    },
    reducers : {
        toggleViewSearch : (state) => {
            state.viewSearch = !state.viewSearch;
        }
    }
})

export const {toggleViewSearch} = gptSlice.actions; 
export default gptSlice.reducer;