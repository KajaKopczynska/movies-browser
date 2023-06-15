import { call, put, takeLatest } from "redux-saga/effects";
import { getApi, baseUrl, apiKey, language } from "../../moviesBrowserApi";
import { fetchSearchError, fetchSearchLoading, fetchSearchSuccess } from "./searchSlice";

function* fetchSearchHandler({ payload: { query } }) {
    const patchMovie = `${baseUrl}/search/movie${apiKey}${language}&query=${query}`;
    const patchPerson = `${baseUrl}/search/person${apiKey}${language}&query=${query}`;
    try {
        const movies = yield call(getApi, patchMovie, patchPerson);
        yield put(fetchSearchSuccess(movies));
    } catch {
        yield put(fetchSearchError());
    }
};

export function* watchFetchSearch() {
    yield takeLatest(fetchSearchLoading.type, fetchSearchHandler);
};