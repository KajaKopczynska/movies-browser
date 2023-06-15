import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getApi, baseUrl, apiKey, language } from "../../moviesBrowserApi";
import { fetchPeopleError, fetchPeopleLoading, fetchPeopleSuccess } from "./peopleSlice";

function* fetchPeopleHandler({ payload: { page } }) {
    const path = `${baseUrl}/person/popular${apiKey}${language}&page=${page}`;
    // query === null
    //   ? `${baseUrl}/person/popular${apiKey}${language}&page=${page}`
    //   : `${baseUrl}/search/person${apiKey}${language}&query=${query}&page=${page}`;
    try {
        yield delay(500);
        const people = yield call(getApi, path);
        yield put(fetchPeopleSuccess(people));
    } catch {
        yield put(fetchPeopleError());
    }
};

export function* watchFetchPeople() {
    yield takeLatest(fetchPeopleLoading.type, fetchPeopleHandler);
};