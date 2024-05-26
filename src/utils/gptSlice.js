import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        viewSearch : false,
        gptMovies : null,
        gptMovieNames : null
    },
    reducers : {
        toggleViewSearch : (state) => {
            state.viewSearch = !state.viewSearch;
        },
        addGptMoviesResult : (state,action) => {
            const {movieNames, movieResults} = action.payload
            state.gptMovies = movieResults;
            state.gptMovieNames = movieNames;
        }
    }
})

export const {toggleViewSearch, addGptMoviesResult} = gptSlice.actions; 
export default gptSlice.reducer;