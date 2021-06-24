import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import { fetchDataSuccess } from "./action";
import { FETCH_DATA } from "../actions";

import axios from "axios";

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
