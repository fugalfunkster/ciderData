import React from 'react';
import {connect} from 'react-redux';
import {selectCurrentTree} from '../actions/index';

class Flyout extends React.Component {
  componentDidUpdate() {
  if(this.props.active) {
      this.props.selectCurrentTree(this.props.datum);
    }
  }
  render() {
 
    return null;
  }
}

export default connect(null, {selectCurrentTree})(Flyout);
