import axios from 'axios';
import { FETCH_WEATHER_OPEN } from './types';

const OPEN_API_KEY ='adc386f01f0aedff182cb35f02a971b7';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${OPEN_API_KEY}`;

export const fetchWeather = (city) => async dispatch => {
    const url = `${ROOT_URL}&q=${city}`;
    const response = await axios.get(url);

    dispatch({
        type: FETCH_WEATHER_OPEN,
        payload: response.data
    });
};