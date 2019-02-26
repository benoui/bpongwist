import { combineReducers } from 'redux';
import openWeatherReducer from './openWeatherReducer';

export default combineReducers({
    openWeather: openWeatherReducer
});