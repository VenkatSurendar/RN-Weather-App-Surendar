import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./Reducer/Auth_Reducer";
import weatherReducer from "./Reducer/Reducer";
import forecastReducer from "./Reducer/Forecast_Reducer";
import searchCityReducer from "./Reducer/myCity_Reducer";

const rootReducer = combineReducers({
  forecast: forecastReducer,
  weather: weatherReducer,
  searchCity: searchCityReducer,
  // auth: authReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
