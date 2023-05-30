import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        status: "loading",
        movie: [],
        cast: [],
        crew: [],
    },
    reducers: {
        fetchMovieLoading: () => ({
            status: "loading",
            movie: [],
            cast: [],
            crew: [],
        }),
        fetchMovieError: () => ({
            status: "error",
            movie: [],
            cast: [],
            crew: [],
        }),
        fetchMovieSuccess: (_, { payload: { movie, movieCredits } }) => ({
            status: "success",
            movie: movie,
            cast: movieCredits.cast,
            crew: movieCredits.crew,
        }),
    },
});

export const {
    fetchMovieLoading,
    fetchMovieError,
    fetchMovieSuccess,
} = movieDetailsAndCreditsSlice.actions;

const selectMovieState = (state) => state.movie;

export const selectMovie = (state) => selectMovieState(state).movie;
export const selectMovieStatus = (state) => selectMovieState(state).status;
export const selectMovieCast = (state) => selectMovieState(state).cast;
export const selectMovieCrew = (state) => selectMovieState(state).crew;

export default movieSlice.reducer;