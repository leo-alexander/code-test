import { actionTypes } from "../actions/mainPageActions";

const INITIAL_STATE = {
  houses: [],
  isSearching: false,
  error: null,
};

const mainPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.fetchHouses: {
      console.log("reducer")
      return {
        ...state,
        isSearching: true,
        error: null,
      };
    }
    case actionTypes.fetchHousesSuccess: {
      return {
        // practices: action.payload.practices,
        isSearching: false,
        error: null,
      };
    }
    case actionTypes.fetchHousesFailure: {
      return {
        ...state,
        isSearching: false,
        // error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default mainPageReducer;
