import { call, put, takeLatest } from "redux-saga/effects";
import { apiKey, baseUrl, language, getApi } from "../../../../moviesBrowserApi";
import {
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
} from "./genreSlice";

function* fetchGenresHandler() {
  const genrePath = `${baseUrl}/genre/movie/list${apiKey}${language}`;
  try {
    const genres = yield call(getApi, genrePath);
    yield put(fetchGenresSuccess(genres));
  } catch (error) {
    yield put(fetchGenresError());
  }
}

export function* watchFetchGenres() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
