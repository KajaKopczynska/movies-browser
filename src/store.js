import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import moviesReducer from "./features/movies/moviesSlice";
import genreReducer from "./common/Genre/genreSlice";
import movieReducer from "./features/movies/MoviePage/movieSlice";
import peopleReducer from "./features/people/peopleSlice";
import personReducer from "./features/people/PersonPage/personSlice";
import searchReducer from "./features/Search/searchSlice";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        genres: genreReducer,
        movie: movieReducer,
        people: peopleReducer,
        person: personReducer,
        search: searchReducer,
    },
    middleware: [SagaMiddleware],
});

SagaMiddleware.run(saga);

export default store;