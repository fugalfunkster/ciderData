import React, {Component} from 'react';
import {connect} from 'react-redux';

class CultivarInfo extends React.Component {
  render() {
    const currentTree= this.props.currentTree;
      return (
        <div style={{width: '50%', margin: '10% auto'}}>
          <h3>{currentTree.Cultivar || 'Cultivar Name'}</h3>
          <div>Tannin % (Mean): {currentTree["Tannin % (Mean)"]}</div>
          <div>Tannin % (Std. Dev.): {currentTree["Tannin % (Std. Dev.)"]}</div>
          <div>Malic Acid g/I (Mean): {currentTree["Malic Acid g/I (Mean)"]}</div>
          <div>Malic Acid g/I (Std. Dev.): {currentTree["Malic Acid g/I (Std. Dev)"]}</div>
          <div>°Brix (Mean): {currentTree["°Brix (Mean)"]}</div>
          <div>°Brix (Std.Dev.): {currentTree["°Brix (Std. Dev.)"]}</div>
          <div>pH (Mean): {currentTree["pH (Mean)"]}</div>
          <div>pH (Std.Dev.): {currentTree["pH (Std. Dev.)"]}</div>
          <div>Productivity: {currentTree["Productivity"]}</div>
          <div>Bearing Habit: {currentTree["Bearing\nHabit"]}</div>
          <div>Blind Wood: {currentTree["Blind\nwood'"]}</div>
          <div>Growth Habit: {currentTree["Growth\nHabit"]}</div>
          <div>Grower Friendly: {currentTree["Grower\nFriendly'"]}</div>
          <div>Alternate bearing: {currentTree["Alternate\nBearing"]}</div>
        </div>
      )  
  }
}

function  mapStateToProps(state) {
  return {
    currentTree: state.currentTree
  };
}

export default connect(mapStateToProps)(CultivarInfo);
