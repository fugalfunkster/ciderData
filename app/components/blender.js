import React, { Component } from 'react';
import { connect } from 'react-redux';
import { blendVariety } from '../actions/index';

import Head from './head.js';

class Blender extends Component {
  generateRows(totalVolume) {
    const rows = this.props.data.map(function (t) {
      if (t.checked) {
        return (
            <tr key={t.Cultivar}>
              <td>{t.Cultivar}</td>
              <td>
                <input type="data"
                       value={t.liters || 0}
                       id={t.Cultivar}
                       onChange={this.props.blendVariety}/>
              </td>
              <td>{ t['Tannin % (Mean)']} g/L</td>
              <td>{ t['Malic Acid g/I (Mean)']} g/L</td>
              <td>{ this.convertBrixToSG(t['°Brix (Mean)'])
                    .toFixed(3) }</td>
              <td>{ ((t.liters * 100 || 0) / totalVolume).toFixed(0)} %</td> 
          </tr>
        );
      }
      return
    }, this);
    return rows;
  }
  convertBrixToSG(brix){
    return (1 + ((brix - 1.6) / (220)));
  }
  calculateTotals () {
    return this.props.data.reduce((prev, cur) => (
      {volume: prev.volume +
               (cur.liters ? cur.liters : 0),
       tannins: prev.tannins +
                (cur.liters
                 ? cur['Tannin % (Mean)'] * cur.liters
                 : 0),
       acids: prev.acids +
                (cur.liters
                 ? cur['Malic Acid g/I (Mean)'] * cur.liters
                 : 0),
       sugars: prev.sugars +
                (cur.liters
                 ? cur['°Brix (Mean)'] * cur.liters
                 : 0),
      }), {volume: 0, tannins: 0, acids: 0, sugars: 0});
  }
  render(props) {
    const { totalVolumeInLiters, totalTanninInGrams,
          totalMalicAcidInGrams,
          productOfSpecificGravityGallons } = this.props.blend;
    const totals = this.calculateTotals();
    
    return (
      <div style={{margin: '5% auto', maxWidth: '1000px'}}>
        <table>
          <Head />
          <tbody>
            { this.generateRows(totals.volume) }
          </tbody>
          <tfoot>
            <tr>
              <td>Blend Stats</td>
              <td> { totals.volume } </td>
              <td> { (totals.tannins / ( totals.volume || 1 ))
                      .toFixed(2) } </td>
              <td> { (totals.acids / ( totals.volume || 1 ))
                      .toFixed(2) } </td>
              <td> { this.convertBrixToSG((totals.sugars) / ( totals.volume || 1 )).toFixed(3) } </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    blend: state.blend
  };
}

export default connect(mapStateToProps,{ blendVariety })(Blender);
