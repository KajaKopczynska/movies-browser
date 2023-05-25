import { all } from "redux-saga/effects";
import { watchFetchMovies } from "./features/movies/moviesSaga";
import { watchFetchGenres } from "./features/movies/MovieTile/Genre/genreSaga";

export default function* saga() {
    yield all([
        watchFetchGenres(),
        watchFetchMovies(),
    ]);
};