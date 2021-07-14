import { CURR_WEATHER } from "../Actions/Actions";

const initialState = {
  weather_info: null,
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case CURR_WEATHER:
      return { ...state, weather_info: action.payload };
    default:
      return state;
  }
}

export default weatherReducer;
