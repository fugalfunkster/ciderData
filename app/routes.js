import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Viz from './components/viz';
import TreeSelector from './components/tree_selector';
import Blender from './components/blender';
import Cite from './components/cite';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Viz} />
    <Route path="select" component={TreeSelector} />
    <Route path="blend" component={Blender} />
    <Route path="cite" component={Cite} />
  </Route>
);
