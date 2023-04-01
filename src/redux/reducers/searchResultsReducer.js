import { SEARCH_ACTION } from "../action/searchAction";

const initialState = {
  results: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ACTION.SEARCH_RESULTS_RECEIVED:
     const incomingResult = action.payload
      return {
        ...state,
        results: [...action.payload, ...state.results],
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
