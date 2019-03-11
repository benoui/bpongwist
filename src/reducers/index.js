import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import openWeatherReducer from './openWeatherReducer';

export default combineReducers({
    openWeather: openWeatherReducer,
    form: formReducer
});