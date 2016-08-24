import React from 'react';
import { VictoryChart, VictoryScatter, VictoryTheme,  VictoryLabel, VictoryLine } from 'victory';
import Flyout from './flyout';

/*
Victory chart
    domain={{x: [0, 1], y: [0, 12]}}
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

 
*/

const Graph = ({data, legend}) => (
  <VictoryChart 
    domainPadding={{x: 10, y: 10}}
    height={400}
    width={400}
    theme={VictoryTheme.material}>

    <VictoryLabel x={200} y={390}
      textAnchor="middle"
      verticalAnchor="middle"
      lineHeight={1.2} >
      {legend.xAxisLabel}     
    </VictoryLabel>

    <VictoryLabel x={10} y={200}
      textAnchor="middle"
      verticalAnchor="middle"
      angle={-90}
      lineHeight={1.2} >
      {legend.yAxisLabel}
    </VictoryLabel>
    
    <VictoryScatter
      data={data.filter(t => (t.checked === true))}
      x={(data) => data[legend.xAxisLabel]}
      y={(data) => data[legend.yAxisLabel]}
      style={{
        data: { fill: (data) => data[legend.xAxisLabel] >= 0.2 ? "crimson" : "navy" }
      }}
      size={4}
      symbol={"triangleUp"}
      labels={(data) => (`
        ${data["Cultivar"]}
        ${legend.xAxisLabel} : ${data[legend.xAxisLabel]}
        ${legend.yAxisLabel} : ${data[legend.yAxisLabel]}`
        )}
      labelComponent={<Flyout />}
      events={[
            {
              target: "data",
              eventHandlers: {
                onClick: (e) => {
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
