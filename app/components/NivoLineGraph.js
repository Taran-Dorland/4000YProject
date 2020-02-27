import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'

type Props = {};

export default class NivoPieGraph extends Component<Props> {
  props: Props;

  /*
    Line graph stacks previous values on top of each other
  */

  render() {

    console.log(this.props.data);

    var importedClients = this.props.data;
    var importedPrograms = this.props.dataPrograms;

    var programs = this.props.selectedPrograms;
    var clients = this.props.selectedClients;

    var data = [];

    //Push appropriate client and program data
    //to graph data object
    for (let i = 0; i < clients.length; i++) {

      var objToPush = {};

      objToPush["id"] = importedClients["Clients"][clients[i]]["Client Name"];
      objToPush["color"] = "hsl(" + Math.floor(Math.random() * 256) + ", 70%, 50%)";

      var programData = [];

      for (let j = 0; j < programs.length; j++) {

        var graphObj = {};

        graphObj["x"] = importedClients["Clients"][clients[i]]["Programs"][programs[j]]["Name"];
        graphObj["y"] = importedClients["Clients"][clients[i]]["Programs"][programs[j]]["Hours"];
        
        programData.push(graphObj);
      }

      objToPush["data"] = programData;
      data.push(objToPush);
    }

    const MyResponsiveLine = ({ data }) => (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Programs',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Hours',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )

    return(
        <div style={{ height: 500, width: 1000 }}>
            <MyResponsiveLine data={data} />
        </div>
    );
  }
}