import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Viz from './components/viz';
import TreeSelector from './components/tree_selector';

export default (
    <Route path="/" component={App} >
      <IndexRoute component={Viz} />
      <Route path="select" component={TreeSelector} />
    </Route>
);
