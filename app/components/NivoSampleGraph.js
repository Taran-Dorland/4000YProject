// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { ResponsiveBar } from '@nivo/bar'

type Props = {};

export default class NivoSampleGraph extends Component<Props> {
  props: Props;

  render() {

    const MyResponsiveBar = ({ data = [
        {
          "country": "AD",
          "hot dog": 81,
          "hot dogColor": "hsl(116, 70%, 50%)",
          "burger": 123,
          "burgerColor": "hsl(161, 70%, 50%)",
          "sandwich": 21,
          "sandwichColor": "hsl(80, 70%, 50%)",
          "kebab": 69,
          "kebabColor": "hsl(232, 70%, 50%)",
          "fries": 24,
          "friesColor": "hsl(94, 70%, 50%)",
          "donut": 140,
          "donutColor": "hsl(253, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 164,
          "hot dogColor": "hsl(74, 70%, 50%)",
          "burger": 180,
          "burgerColor": "hsl(324, 70%, 50%)",
          "sandwich": 120,
          "sandwichColor": "hsl(354, 70%, 50%)",
          "kebab": 155,
          "kebabColor": "hsl(274, 70%, 50%)",
          "fries": 13,
          "friesColor": "hsl(177, 70%, 50%)",
          "donut": 198,
          "donutColor": "hsl(186, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 6,
          "hot dogColor": "hsl(127, 70%, 50%)",
          "burger": 171,
          "burgerColor": "hsl(7, 70%, 50%)",
          "sandwich": 88,
          "sandwichColor": "hsl(210, 70%, 50%)",
          "kebab": 63,
          "kebabColor": "hsl(353, 70%, 50%)",
          "fries": 31,
          "friesColor": "hsl(291, 70%, 50%)",
          "donut": 115,
          "donutColor": "hsl(310, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 61,
          "hot dogColor": "hsl(5, 70%, 50%)",
          "burger": 173,
          "burgerColor": "hsl(353, 70%, 50%)",
          "sandwich": 147,
          "sandwichColor": "hsl(303, 70%, 50%)",
          "kebab": 80,
          "kebabColor": "hsl(195, 70%, 50%)",
          "fries": 187,
          "friesColor": "hsl(153, 70%, 50%)",
          "donut": 97,
          "donutColor": "hsl(226, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 94,
          "hot dogColor": "hsl(6, 70%, 50%)",
          "burger": 138,
          "burgerColor": "hsl(302, 70%, 50%)",
          "sandwich": 17,
          "sandwichColor": "hsl(190, 70%, 50%)",
          "kebab": 47,
          "kebabColor": "hsl(315, 70%, 50%)",
          "fries": 3,
          "friesColor": "hsl(301, 70%, 50%)",
          "donut": 52,
          "donutColor": "hsl(30, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 80,
          "hot dogColor": "hsl(239, 70%, 50%)",
          "burger": 44,
          "burgerColor": "hsl(315, 70%, 50%)",
          "sandwich": 7,
          "sandwichColor": "hsl(39, 70%, 50%)",
          "kebab": 198,
          "kebabColor": "hsl(133, 70%, 50%)",
          "fries": 117,
          "friesColor": "hsl(144, 70%, 50%)",
          "donut": 135,
          "donutColor": "hsl(96, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 188,
          "hot dogColor": "hsl(32, 70%, 50%)",
          "burger": 28,
          "burgerColor": "hsl(314, 70%, 50%)",
          "sandwich": 20,
          "sandwichColor": "hsl(298, 70%, 50%)",
          "kebab": 17,
          "kebabColor": "hsl(82, 70%, 50%)",
          "fries": 42,
          "friesColor": "hsl(84, 70%, 50%)",
          "donut": 177,
          "donutColor": "hsl(214, 70%, 50%)"
        }
      ] }) => (
        <ResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
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
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
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
        <div style={{ height: 1000, width: 1000}}>
            <MyResponsiveBar />
        </div>
    );
  }
}
