import { call, delay, put, takeLatest, all } from "redux-saga/effects";
import { fetchPersonLoading, fetchPersonError, fetchPersonSuccess } from "./personSlice";
import { getApi, baseUrl, apiKey, language } from "../../../moviesBrowserApi";

function* fetchPersonHandler({ payload: id }) {
    const personPath = `${baseUrl}/person/${id}/movie_credits${apiKey}${language}`;
    const detailsPath = `${baseUrl}/person/${id}${apiKey}${language}`;

    try {
        yield delay(500);
        const [personDetails, person] = yield all([
            call(getApi, personPath),
            call(getApi, detailsPath),
        ]);
        yield put(fetchPersonSuccess({ person, personDetails }));
    } catch (error) {
        yield put(fetchPersonError());
    }
};

export function* watchFetchPerson() {
    yield takeLatest(fetchPersonLoading.type, fetchPersonHandler);
};