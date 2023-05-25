import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import moviesReducer from "./features/movies/moviesSlice";
import genreReducer from "./features/movies/MovieTile/Genre/genreSlice"

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
    },
    middleware: [SagaMiddleware],
});

SagaMiddleware.run(saga);

export default store;