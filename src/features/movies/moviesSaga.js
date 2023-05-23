import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchMoviesSuccess, fetchMoviesError, fetchMoviesLoading } from "./moviesSlice";
import { getApi, baseUrl, apiKey, language } from "../../moviesBrowserApi";

function* fetchMoviesHandler({ payload: { page, query } }) {
    const path =
        query === null
            ? `${baseUrl}/movie/popular${apiKey}${language}&page=${page}`
            : `${baseUrl}/search/movie${apiKey}${language}&query=${query}&page=${page}`;
    try {
        yield delay(1000);
        const movies = yield call(getApi, path);
        yield put(fetchMoviesSuccess(movies));
    } catch {
        yield put(fetchMoviesError());
    }
};

export function* watchFetchMovies() {
    yield takeLatest(fetchMoviesLoading.type, fetchMoviesHandler);
};