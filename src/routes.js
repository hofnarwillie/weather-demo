import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import OverviewPage from './containers/OverviewPage';
import DetailsPage from './containers/DetailsPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={OverviewPage}/>
    <Route path="details/" component={DetailsPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
