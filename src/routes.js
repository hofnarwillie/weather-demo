import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import OverviewPage from './containers/OverviewPage';
import CitySearchPage from './containers/CitySearchPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={OverviewPage}/>
    <Route path="search" component={CitySearchPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
