import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import styles from './main.css';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

const mount = document.createElement('div');
mount.className = 'app';
document.body.appendChild(mount);

ReactDOM.render(
  <Provider style={{backgroundColor: 'black'}} store={createStore(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.app'));

