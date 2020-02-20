import React, { Component } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import GraphSelect from './GraphSelect';

type Props = {};

export default class NivoBarGraph extends Component<Props> {
  props: Props;

  render() {

    //console.log(this.props.data);
    //console.log(this.props.dataPrograms);

    var importedClients = this.props.data;

    var programs = this.props.selectedPrograms;
    var clients = this.props.selectedClients;

    var data = [];

    //Push each data element to graph data
    for (let i = 0; i < clients.length; i++) {

      var objToPush = {};

      objToPush["Client Name"] = importedClients["Clients"][clients[i]]["Client Name"];
      
      for (let j = 0; j < programs.length; j++) {

        console.log(programs[j]);
        objToPush[importedClients["Clients"][clients[i]]["Programs"][programs[j]]["Name"].toString(36)] = importedClients["Clients"][clients[i]]["Programs"][programs[j]]["Hours"];
      }

      console.log("OBJ TO PUSH: ");
      console.log(objToPush);
      data.push(objToPush);
    }

    var dataKeys = [];

    //Push each program name to the graph legend
    for (let i = 0; i < programs.length; i++) {
      dataKeys.push(importedClients["Clients"][0]["Programs"][programs[i]]["Name"]);
    }

    console.log(importedClients["Clients"][0]["Programs"][0]["Name"]);

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

      <div>
        <div style={{ height: 500, width: 1000 }}>
          <MyResponsiveBar data={data} />
        </div>
      </div>
    );
  }
}