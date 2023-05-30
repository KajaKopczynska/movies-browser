import { call, delay, put, takeLatest, all } from "redux-saga/effects";
import { fetchMovieLoading, fetchMovieError, fetchMovieSuccess } from "./movieSlice";
import { getApi, baseUrl, apiKey, language } from "../../../moviesBrowserApi";

function* fetchMovieHandler({ payload: id }) {
    const moviePath = `${baseUrl}movie/${id}${apiKey}${language}`;
    const creditsPath = `${baseUrl}movie/${id}/credits${apiKey}${language}`;

    try {
        yield delay(500);
        const [movie, movieCredits] = yield all([
            call(getApi, moviePath),
            call(getApi, creditsPath),
        ]);
        yield put(fetchMovieSuccess({ movie, movieCredits }));
    } catch (error) {
        yield put(fetchMovieError());
    }
};

export function* watchFetchMovie() {
    yield takeLatest(fetchMovieLoading.type, fetchMovieHandler);
};