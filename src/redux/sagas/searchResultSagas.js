import { put, takeLatest } from "redux-saga/effects";
import { SEARCH_ACTION } from "../action/searchAction";

function* handleSearchResultsReceived(action) {
  const { results } = action.payload;
  yield put({ type: SEARCH_ACTION.SEARCH_RESULTS_RECEIVED, payload: results });
}

export default function* searchResultSaga() {
  yield takeLatest(
    SEARCH_ACTION.SEARCH_RESULTS_RECEIVED,
    handleSearchResultsReceived
  );
}
