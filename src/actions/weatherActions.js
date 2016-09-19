import weatherApi from '../services/open-weather-api';
import * as types from '../constants/action-types';


export function getWeather() {
    return function(dispatch) {

        weatherApi.getData().then(function(data){
            
            dispatch({
                type: types.GET_WEATHER_SUCCESS,
                data: data
            });
            
        });

    };
}