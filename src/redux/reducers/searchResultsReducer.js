import { SEARCH_ACTION } from "../action/searchAction";

const initialState = {
  results: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ACTION.SEARCH_RESULTS_RECEIVED:
      const incomingResult = action.payload;
      let countrySearch = [];
      const isExistingCountry = [...incomingResult].forEach(
        (incomingSearch) => {
          const index = state.results.findIndex(
            (prevSearch) => prevSearch.id === incomingSearch.id
          );
          if (index > -1) {
            state.results = [...state.results];
          } else {
            countrySearch.push(incomingSearch);
          }
        }
      );
      return {
        ...state,
        results: [...countrySearch, ...state.results],
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
