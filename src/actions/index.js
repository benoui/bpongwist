import axios from 'axios';
import { FETCH_WEATHER_OPEN } from './types';
const BPONG_API_KEY = '9a966e392e0bba5b43f9e4f0d6567b1f';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${BPONG_API_KEY}`;

export const fetchWeather = (city) => async dispatch => {
    const url = `${ROOT_URL}&q=${city}`;
    const response = await axios.get(url);

    dispatch({
        type: FETCH_WEATHER_OPEN,
        payload: response.data
    });
};