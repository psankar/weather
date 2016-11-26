import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  Weather: WeatherReducer
});

export default rootReducer;
