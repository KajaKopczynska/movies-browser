import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        status: "loading",
        movies: [],
        totalPages: 0,
        totalResults: 0,
        query: "",
    },
    reducers: {
        fetchMoviesLoading: (state) => {
            state.status = "loading";
        },
        fetchMoviesError: (state) => {
            state.status = "error";
        },
        fetchMoviesSuccess: (state, { payload: movies }) => {
            state.status = "success";
            state.movies = movies.results;
            state.totalPages = movies.total_pages;
            state.totalResults = movies.total_results;
        },
    },
});

export const {
    fetchMoviesLoading,
    fetchMoviesError,
    fetchMoviesSuccess
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectStatus = (state) => selectMoviesState(state).status;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;
export const selectTotalResults = (state) => selectMoviesState(state).totalResults;

export default moviesSlice.reducer;