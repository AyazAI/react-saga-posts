import { all } from "redux-saga/effects";

import {
  watchIncrement,
  watchDecrement,
  //   watchFetchData,
} from "./increment/saga";

import { watchFetchData } from "./posts/saga";

export default function* rootSaga() {
  yield all([watchIncrement(), watchDecrement(), watchFetchData()]);
}
