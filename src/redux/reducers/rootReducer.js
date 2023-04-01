import { combineReducers } from "redux";
import searchResultsReducer from "./searchResultsReducer";

const rootReducer = combineReducers({
  searchResults: searchResultsReducer,
});

export default rootReducer;
