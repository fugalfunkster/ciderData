import React, { PropTypes }  from 'react';
import { VictoryChart, VictoryScatter, VictoryTheme, VictoryLabel, VictoryLine, VictoryStack } from 'victory';
import data from '../data/cider.js';

let xString = "Tannin % (Mean)";
let xDev = "Tannin % (Std. Dev.)";
let yString = "Malic Acid g/I (Mean)";
let yDev = "Malic Acid g/I (Std. Dev.)";


class Flyout extends React.Component {

  /* removed:

   static propTypes = {
     active: PropTypes.bool
   };
   
  */
  render() {
    const pathStyle = {stroke: "black", fill: "cornsilk"};
    const group = (
      <g>
        <VictoryLabel {...this.props} x={250} y ={100}/>
      </g>
    );
    return this.props.active ? group : null;
  }

}

const Graph = (props) => (
  <VictoryChart 
    domainPadding={{x: 10, y: 10}}
    height={400}
    width={400}
    domain={{x: [0, 1], y: [0, 12]}}
    theme={VictoryTheme.material}>

    <VictoryLabel x={200} y={390}
      textAnchor="middle"
      verticalAnchor="middle"
      lineHeight={1.2} >
      {xString}     
    </VictoryLabel>

    <VictoryLabel x={10} y={200}
      textAnchor="middle"
      verticalAnchor="middle"
      angle={-90}
      lineHeight={1.2} >
      {yString}
    </VictoryLabel>

    <VictoryLine
      data={[
        {x: 0, y: 4.5},
        {x: 1, y: 4.5},
      ]}
      style={{data: {strokeDasharray: "1,5"}}} />
    <VictoryLine
      data={[
      {x: 0.2, y: 0},
      {x: 0.2, y: 12},
      ]}
    style={{data: {strokeDasharray: "1,5"}}} />
    
    <VictoryScatter
      data={data}
      x={(data) => data[xString]}
      y={(data) => data[yString]}
      style={{
        data: { fill: (data) => data[xString] >= 0.2 ? "crimson" : "navy" }
      }}
      size={4}
      symbol={"triangleUp"}
      labels={(data) => (`
        ${data["Cultivar"]}
        ${xString} : ${data[xString]}
        ${yString} : ${data[yString]}`
        )}
      labelComponent={<Flyout/>}
      events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "labels",
                      mutation: () => {
                        return {active: true};
                      }
                    }
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "labels",
                      mutation: () => {
                        return {active: false};
                      }
                    }
                  ];
                }
              }
            }
      ]}
    >
    </VictoryScatter>
  </VictoryChart>
);

module.exports = Graph;
