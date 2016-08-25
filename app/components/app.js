import React, {Component} from 'react';
import NavBar from './nav';

const App = (props) => (
  <div style={{maxWidth: "1000px", margin: "5% auto 0 auto"}}>
    <h1 style={{textAlign: 'center'}}>
      WSU Extension Cider Apple Data
    </h1>
    <h2 style={{textAlign: 'center'}}>
      Juice Analysis of Varietal Ciders in Western Washington
    </h2>
    <NavBar />
    {props.children}
  </div>
);


export default App;
