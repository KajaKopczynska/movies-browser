import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import moviesReducer from "./features/movies/moviesSlice";
import genreReducer from "./common/Genre/genreSlice";
import movieReducer from "./features/movies/MoviePage/movieSlice";
import peopleRducer from "./features/people/peopleSlice";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
        movie: movieReducer,
        people: peopleRducer,
    },
    middleware: [SagaMiddleware],
});

SagaMiddleware.run(saga);

export default store;