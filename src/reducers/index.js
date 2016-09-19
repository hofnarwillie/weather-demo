// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import weatherReducer from './weather-reducer';

const rootReducer = combineReducers({
    weather: weatherReducer,
    routing: routerReducer
});

export default rootReducer;