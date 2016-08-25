import React from 'react';
import { connect } from 'react-redux';

import Selector from './selector';
import Graph from './graph.js';
import CultivarInfo from './cultivarInfo';

const Viz = props => (
  <div>
    <Selector />
    <div style={{display: 'flex', minHeight: '500px', justifyContent: 'space-around'}}>
      <Graph data={props.data} legend={props.legend}/>
      <CultivarInfo />
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    data: state.data,
    legend: state.legend,
  };
}

export default connect(mapStateToProps)(Viz);
