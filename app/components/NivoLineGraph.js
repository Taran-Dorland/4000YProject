import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'

type Props = {};

export default class NivoPieGraph extends Component<Props> {
  props: Props;

  render() {

    console.log(this.props.data);

    var thisData = this.props.data;

    var data = [
        {
          "id": thisData["Clients"][0]["Client Name"],
          "color": "hsl(347, 70%, 50%)",
          "data": [
            {
              "x": thisData["Clients"][0]["Programs"][0]["Name"],
              "y": thisData["Clients"][0]["Programs"][0]["Hours"]
            },
            {
              "x": thisData["Clients"][0]["Programs"][1]["Name"],
              "y": thisData["Clients"][0]["Programs"][1]["Hours"]
            },
            {
              "x": thisData["Clients"][0]["Programs"][60]["Name"],
              "y": thisData["Clients"][0]["Programs"][60]["Hours"]
            },
            {
              "x": thisData["Clients"][0]["Programs"][61]["Name"],
              "y": thisData["Clients"][0]["Programs"][61]["Hours"]
            }
          ]
        },
        {
          "id": thisData["Clients"][1]["Client Name"],
          "color": "hsl(84, 70%, 50%)",
          "data": [
            {
              "x": thisData["Clients"][1]["Programs"][0]["Name"],
              "y": thisData["Clients"][1]["Programs"][0]["Hours"]
            },
            {
              "x": thisData["Clients"][1]["Programs"][1]["Name"],
              "y": thisData["Clients"][1]["Programs"][1]["Hours"]
            },
            {
              "x": thisData["Clients"][1]["Programs"][60]["Name"],
              "y": thisData["Clients"][1]["Programs"][60]["Hours"]
            },
            {
              "x": thisData["Clients"][1]["Programs"][61]["Name"],
              "y": thisData["Clients"][1]["Programs"][61]["Hours"]
            }
          ]
        },
        {
          "id": thisData["Clients"][2]["Client Name"],
          "color": "hsl(181, 70%, 50%)",
          "data": [
            {
              "x": thisData["Clients"][2]["Programs"][0]["Name"],
              "y": thisData["Clients"][2]["Programs"][0]["Hours"]
            },
            {
              "x": thisData["Clients"][2]["Programs"][1]["Name"],
              "y": thisData["Clients"][2]["Programs"][1]["Hours"]
            },
            {
              "x": thisData["Clients"][2]["Programs"][60]["Name"],
              "y": thisData["Clients"][2]["Programs"][60]["Hours"]
            },
            {
              "x": thisData["Clients"][2]["Programs"][61]["Name"],
              "y": thisData["Clients"][2]["Programs"][61]["Hours"]
            }
          ]
        },
        {
          "id": thisData["Clients"][3]["Client Name"],
          "color": "hsl(102, 70%, 50%)",
          "data": [
            {
              "x": thisData["Clients"][3]["Programs"][0]["Name"],
              "y": thisData["Clients"][3]["Programs"][0]["Hours"]
            },
            {
              "x": thisData["Clients"][3]["Programs"][1]["Name"],
              "y": thisData["Clients"][3]["Programs"][1]["Hours"]
            },
            {
              "x": thisData["Clients"][3]["Programs"][60]["Name"],
              "y": thisData["Clients"][3]["Programs"][60]["Hours"]
            },
            {
              "x": thisData["Clients"][3]["Programs"][61]["Name"],
              "y": thisData["Clients"][3]["Programs"][61]["Hours"]
            }
          ]
        }
      ];

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
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
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