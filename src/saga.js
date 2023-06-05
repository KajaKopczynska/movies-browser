import { all } from "redux-saga/effects";
import { watchFetchMovies } from "./features/movies/moviesSaga";
import { watchFetchGenres } from "./common/Genre/genreSaga";
import { watchFetchMovie } from "./features/movies/MoviePage/movieSaga";
import { watchFetchPeople } from "./features/people/peopleSaga";

export default function* saga() {
    yield all([
        watchFetchGenres(),
        watchFetchMovies(),
        watchFetchMovie(),
        watchFetchPeople(),
    ]);
};