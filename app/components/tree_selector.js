import React, { Component } from 'react';
import { connect } from 'react-redux';

import { checkTree, checkAll, uncheckAll,
        onlyCheckSweets, onlyCheckBittersweets,
        onlyCheckBittersharps,
        onlyCheckSharps } from '../actions/index';

class TreeSelector extends React.Component{
  render() {
    return (
      <div style={{margin: '5% auto'}}>

        <h2 style={{textAlign: 'center'}}>Select Trees to Graph</h2>
        
        <div style={{textAlign: 'center'}}>
          <button onClick={this.props.checkAll}>
            All
          </button>
          <button onClick={this.props.uncheckAll}>
            None
          </button>
          <button onClick={this.props.onlyCheckSweets}>
            Only Sweets
          </button>
          <button onClick={this.props.onlyCheckBittersweets}>
            Only Bittersweets
          </button>
          <button onClick={this.props.onlyCheckBittersharps}>
            Only Bittersharps
          </button>
          <button onClick={this.props.onlyCheckSharps}>
            Only Sharps
          </button>
        </div>
        
        <div style={{display: 'flex', height: '35em', marginTop: '5%', 
                     flexDirection: 'column', flexWrap: 'wrap',
                     justifyContent: 'flex-start',
                     alignContent: 'space-around'}}>
        {
          this.props.data.map( t => (
            <div key={t.Cultivar}>
              <input type="checkbox" id={t.Cultivar}
                     checked={t.checked}
                     onChange={this.props.checkTree} />
                { t.Cultivar }
            </div>))
        }
        </div>
        
      </div>
    );
  }
}

function  mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps,
                       { checkTree, checkAll, uncheckAll,
                        onlyCheckSweets, onlyCheckBittersweets,
                        onlyCheckBittersharps, onlyCheckSharps }
                      )(TreeSelector);
