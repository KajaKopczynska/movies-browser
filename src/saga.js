import { all } from "redux-saga/effects";
import { watchFetchMovies } from "./features/movies/moviesSaga";

export default function* saga() {
    yield all([
        watchFetchMovies(),
    ]);
};