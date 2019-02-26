import { FETCH_WEATHER_OPEN } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_WEATHER_OPEN:
            return [action.payload, ...state];
        default:
            return state;
    }
};