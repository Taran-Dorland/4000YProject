import React, { Component } from 'react';
import { ResponsivePie } from '@nivo/pie'

type Props = {};

export default class NivoPieGraph extends Component<Props> {
  props: Props;

  render() {

    console.log(this.props.data);

    var thisData = this.props.data;

    var data = [
        {
          "id": thisData["Clients"][0]["Client Name"],
          "label": thisData["Clients"][0]["Client Name"],
          "value": thisData["Clients"][0]["Programs"][61]["Hours"],
          "color": "hsl(12, 70%, 50%)"
        },
        {
          "id": thisData["Clients"][1]["Client Name"],
          "label": thisData["Clients"][1]["Client Name"],
          "value": thisData["Clients"][1]["Programs"][61]["Hours"],
          "color": "hsl(214, 70%, 50%)"
        },
        {
          "id": thisData["Clients"][2]["Client Name"],
          "label": thisData["Clients"][2]["Client Name"],
          "value": thisData["Clients"][2]["Programs"][61]["Hours"],
          "color": "hsl(150, 70%, 50%)"
        },
        {
          "id": thisData["Clients"][3]["Client Name"],
          "label": thisData["Clients"][3]["Client Name"],
          "value": thisData["Clients"][3]["Programs"][61]["Hours"],
          "color": "hsl(247, 70%, 50%)"
        }
      ];

    const MyResponsivePie = ({ data }) => (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor={{ from: 'color' }}
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'ruby'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'c'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'go'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'python'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'scala'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'lisp'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'elixir'
                    },
                    id: 'lines'
                },
                {
                    match: {
                        id: 'javascript'
                    },
                    id: 'lines'
                }
            ]}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    translateY: 56,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />
    )

    return(
        <div style={{ height: 500, width: 1000 }}>
            <MyResponsivePie data={data} />
        </div>
    );
  }
}