import { combineReducers } from 'redux';
import ReducerWeather from './reducer_weather.js';

const rootReducer = combineReducers({
  weather: ReducerWeather
});

export default rootReducer;
