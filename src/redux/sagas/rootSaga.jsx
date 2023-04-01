import { all } from "redux-saga/effects";
import searchResultSaga from "./searchResultSagas";

export default function* rootSaga() {
  yield all([
    searchResultSaga(),
    // Add other sagas here
  ]);
}
