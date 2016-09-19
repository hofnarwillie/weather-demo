import * as actionTypes from '../constants/action-types';
import objectAssign from 'object-assign';
import initialState from './initial-state';


export default function weatherReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.GET_WEATHER_SUCCESS:
            return objectAssign({}, state, action.data);
            
        default:
            return state;
    }
}
