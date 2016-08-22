import React from 'react';
import mapDispatchToProps from 'redux';
import { connect } from 'react-redux';
import { onAxisChange } from '../actions/index';

const Selector = ({onAxisChange}) => (
    <form onChange={onAxisChange} style={{textAlign: 'center'}}>
      <span style={{padding: '2%'}}>X Axis:</span>
      <select name="X" defaultValue="Tannin % (Mean)">
        <option value="Tannin % (Mean)">Tannin % (Mean)</option>
        <option value="Malic Acid g/I (Mean)">Malic Acid g/I (Mean)</option>
        <option value="°Brix (Mean)">°Brix (Mean)</option>
        <option value="pH (Mean)">pH (Mean)</option>
      </select>

      <span style={{padding: '2%'}}>Y Axis:</span>
      <select name="Y" defaultValue="Malic Acid g/I (Mean)">
        <option value="Tannin % (Mean)">Tannin % (Mean)</option>
        <option value="Malic Acid g/I (Mean)">Malic Acid g/I (Mean)</option>
        <option value="°Brix (Mean)">°Brix (Mean)</option>
        <option value="pH (Mean)">pH (Mean)</option>
      </select>
    </form>
);

export default connect(null, {onAxisChange})(Selector);
