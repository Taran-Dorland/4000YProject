import React, { Component } from 'react';
import { Button } from 'antd';
import ReactDOM from 'react-dom';
import ReactToPdf from "react-to-pdf";
import NivoGraph from './GraphData';
import TableData from './TableData';
import { ResponsiveBar } from '@nivo/bar';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

type Props = {};

export default class ExportData extends Component {
  props: Props;

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
  };

  render() {

    const ref = React.createRef();
    const options = {
      orientation: 'portrait',
      format: 'a4'
    };

    const MyResponsiveBar = ({ data, dataKeys }) => (
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

    var graphs = this.props.graphs;
    console.log(graphs);

    // const ListGraphs = graphs.map((number) =>
    //   <MyResponsiveBar data={graphs[number]["data"]} dataKeys={graphs[number]["dataKeys"]} />
    // );
    
    return (
      <div>
        <Button onClick={this.printDocument} type="primary" icon="download" size="large">
          Download Report
        </Button>

        <div id="divToPrint" style={{ width: 500, height: 250 }} ref={ref}>
          <MyResponsiveBar data={graphs[0]["data"]} dataKeys={graphs[0]["dataKeys"]} />
          <MyResponsiveBar data={graphs[1]["data"]} dataKeys={graphs[1]["dataKeys"]} />
          <MyResponsiveBar data={graphs[2]["data"]} dataKeys={graphs[2]["dataKeys"]} />
        </div>
      </div>
    );
  }
}