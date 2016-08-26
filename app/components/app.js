import React, {Component} from 'react';
import NavBar from './nav';

const App = (props) => (
    <div className={'app'}>
      <h1>
        Cider Laboratory
      </h1>
      <NavBar />
      {props.children}
    </div>
);


export default App;
