import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={TablePage}/>
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
