import { FORECAST_WEATHER } from "../Actions/Actions";

const initialState = {
  weather_forecast: null,
};

function forecastReducer(state = initialState, action) {
  switch (action.type) {
    case FORECAST_WEATHER:
      return { ...state, weather_forecast: action.payload };
    default:
      return state;
  }
}

export default forecastReducer;
