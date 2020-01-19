import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';

type Props = {};

export default class NivoBarGraph extends Component<Props> {
  props: Props;

  render() {

    console.log(this.props.data);

    var thisData = this.props.data;

    var data = [
      {
        "Client Name": thisData[1][0],
        "1- Contact with Youth": thisData[1][5],
        "2 - Court contact": thisData[1][6],
        "Total Indirect": thisData[1][65],
        "Total": thisData[1][66]
      },
      {
        "Client Name": thisData[2][0],
        "1- Contact with Youth": thisData[2][5],
        "2 - Court contact": thisData[2][6],
        "Total Indirect": thisData[2][65],
        "Total": thisData[2][66]
      },
      {
        "Client Name": thisData[3][0],
        "1- Contact with Youth": thisData[3][5],
        "2 - Court contact": thisData[3][6],
        "Total Indirect": thisData[3][65],
        "Total": thisData[3][66]
      },
      {
        "Client Name": thisData[4][0],
        "1- Contact with Youth": thisData[4][5],
        "2 - Court contact": thisData[4][6],
        "Total Indirect": thisData[4][65],
        "Total": thisData[4][66]
      },
      {
        "Client Name": thisData[5][0],
        "1- Contact with Youth": thisData[5][5],
        "2 - Court contact": thisData[5][6],
        "Total Indirect": thisData[5][65],
        "Total": thisData[5][66]
      }
    ];

    var dataKeys = [thisData[0][5], thisData[0][6], thisData[0][65], thisData[0][66]];

    const MyResponsiveBar = ({ data }) => (
      <ResponsiveBar
        data={data}
        keys={dataKeys}
        indexBy="Client Name"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.1}
        colors={{ scheme: 'nivo' }}
        groupMode="grouped"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Person',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Hours',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    )

    return (

      <div style={{ height: 500, width: 1000 }}>
        <MyResponsiveBar data={data} />
      </div>
    );
  }
}