import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import moviesReducer from "./features/movies/moviesSlice";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
    middleware: [SagaMiddleware],
});

SagaMiddleware.run(saga);

export default store;