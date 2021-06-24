import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { incrementCounter, decrementCounter, fetchDataSuccess } from "./action";
import { INCREMENT, DECREMENT, FETCH_DATA } from "../actions";

import axios from "axios";

function* incrementor() {
  console.log("Incrementing from sagas");
}
export function* watchIncrement() {
  yield takeEvery(INCREMENT, incrementor);
}
function* decrementor() {
  console.log("Decrementing from sagas");
}
export function* watchDecrement() {
  yield takeEvery(DECREMENT, decrementor);
}

/**
 *
 * Single Saga to write to fetch Data
 *
 */

const fetchDataAsync = async () => {
  return await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response)
    .catch((err) => err);
};

function* fetchData() {
  console.log("Fetching data from saga");
  const response = yield call(fetchDataAsync);
  yield put(fetchDataSuccess(response.data));
}

export function* watchFetchData() {
  yield takeEvery(FETCH_DATA, fetchData);
}
