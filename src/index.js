/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {getWeather} from './actions/weatherActions';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

//styles
import './scss/index.scss';

//setup Redux
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

//initial data load
store.dispatch(getWeather());

//create React entry point
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
