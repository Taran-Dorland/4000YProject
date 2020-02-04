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
        "Client Name": thisData["Clients"][0]["Client Name"],
        "1- Contact with Youth": thisData["Clients"][0]["Programs"][0]["Hours"],
        "2 - Court contact": thisData["Clients"][0]["Programs"][1]["Hours"],
        "Total Indirect": thisData["Clients"][0]["Programs"][60]["Hours"],
        "Total": thisData["Clients"][0]["Programs"][61]["Hours"]
      },
      {
        "Client Name": thisData["Clients"][1]["Client Name"],
        "1- Contact with Youth": thisData["Clients"][1]["Programs"][0]["Hours"],
        "2 - Court contact": thisData["Clients"][1]["Programs"][1]["Hours"],
        "Total Indirect": thisData["Clients"][1]["Programs"][60]["Hours"],
        "Total": thisData["Clients"][1]["Programs"][61]["Hours"]
      },
      {
        "Client Name": thisData["Clients"][2]["Client Name"],
        "1- Contact with Youth": thisData["Clients"][2]["Programs"][0]["Hours"],
        "2 - Court contact": thisData["Clients"][2]["Programs"][1]["Hours"],
        "Total Indirect": thisData["Clients"][2]["Programs"][60]["Hours"],
        "Total": thisData["Clients"][2]["Programs"][61]["Hours"]
      },
      {
        "Client Name": thisData["Clients"][3]["Client Name"],
        "1- Contact with Youth": thisData["Clients"][3]["Programs"][0]["Hours"],
        "2 - Court contact": thisData["Clients"][3]["Programs"][1]["Hours"],
        "Total Indirect": thisData["Clients"][3]["Programs"][60]["Hours"],
        "Total": thisData["Clients"][3]["Programs"][61]["Hours"]
      }
    ];

    var dataKeys = [
      thisData["Clients"][0]["Programs"][0]["Name"],
      thisData["Clients"][0]["Programs"][1]["Name"],
      thisData["Clients"][0]["Programs"][60]["Name"],
      thisData["Clients"][0]["Programs"][61]["Name"]
    ];

    console.log(thisData["Clients"][0]["Programs"][0]["Name"]);

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