import { all } from "redux-saga/effects";
import { watchFetchMovies } from "./features/movies/moviesSaga";
import { watchFetchGenres } from "./features/movies/MovieTile/Genre/genreSaga";
import { watchFetchMovie } from "./features/movies/MoviePage/movieSaga";

export default function* saga() {
    yield all([
        watchFetchGenres(),
        watchFetchMovies(),
        watchFetchMovie(),
    ]);
};