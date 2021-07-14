import axios from "axios";
export const CURR_WEATHER = "CURR_WEATHER";
export const FORECAST_WEATHER = "FORECAST_WEATHER";
export const SEARCH_CITY = "SEARCH_CITY";
export const SET_ERROR = "SET_ERROR";

export const getCurrentWeather = (city) => async (dispatch, getState) => {
  const response = await axios.get(`http://10.59.96.38:4002/current/${city}`);
  dispatch({ type: CURR_WEATHER, payload: response.data });
};
export const getForecastWeather = (city) => async (dispatch, getState) => {
  console.log("Forecast Action");
  const response = await axios.get(`http://10.59.96.38:4002/forecast/${city}`);
  // console.log(response.data);
  dispatch({ type: FORECAST_WEATHER, payload: response.data });
};

export const searchCity = (city) => {
  return {
    type: SEARCH_CITY,
    payload: {
      data: city,
    },
  };
};
