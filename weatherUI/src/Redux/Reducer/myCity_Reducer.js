import { SEARCH_CITY, SET_ERROR } from "../Actions/Actions";

const initialState = {
  data: null,
  error: "",
};

function searchCityReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY:
      return {
        data: action.payload,
        error: "",
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default searchCityReducer;
