import React, { Component } from 'react';
import { Button, Input } from 'antd';
import ReactDOM from 'react-dom';
import ReactToPdf from "react-to-pdf";
import NivoGraph from './GraphData';
import TableData from './TableData';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

type Props = {};

export default class ExportData extends Component {
  props: Props;

  GraphIterator = 0;

  printDocument(length) {

    const doc = new jsPDF();
    var trackPage = 0;

    for (let i = 0; i < length; i++) {

      const input = document.getElementById(i.toString(36));
      console.log("i: " + i);

      html2canvas(input).then((canvas) => {

        const img = canvas.toDataURL('image/png');

        if (trackPage == 0) {
          doc.addImage(img, 'JPEG', 0, 0);
          trackPage++;
        } else if (trackPage == 1) {
          doc.addImage(img, 'JPEG', 0, 0);
          doc.addPage();
          trackPage--;
        }
      });
    }

    console.log(doc);
    doc.save("download.pdf");
  };

  setGraphId = () => {

    var returnString;
    returnString = this.GraphIterator;
    this.GraphIterator++;

    console.log(returnString);
    return returnString;
  }

  getGraphs = (graphArr, graphType) => {

    var returnArr = [];

    for (let i = 0; i < graphArr.length; i++) {
      
      if (graphArr[i].type == graphType) {
        returnArr.push(graphArr[i]);
      }
    }

    return returnArr;
  }

  render() {

    const ref = React.createRef();
    const options = {
      orientation: 'portrait',
      format: 'a4'
    };

    const { TextArea } = Input;

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
    const MyResponsivePie = ({ data }) => (
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
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

    //https://stackoverflow.com/questions/31284169/parse-error-adjacent-jsx-elements-must-be-wrapped-in-an-enclosing-tag
    const BarGraphGeneration = ({graphArray}) => (
      <>
        {graphArray.map(singleGraph => (
          <div>
            <div id={this.GraphIterator++} style={{ height: 500, width: 750 }}>
              <MyResponsiveBar data={singleGraph.data} dataKeys={singleGraph.dataKeys} />
            </div>
            <TextArea rows={2} />
          </div>
        ))}
      </>
    )

    const PieGraphGeneration = ({graphArray}) => (
      <>
        {graphArray.map(singleGraph => (
          <div>
            <div id={this.GraphIterator++} style={{ height: 500, width: 750 }}>
              <MyResponsivePie data={singleGraph.data} />
            </div>
            <TextArea rows={2} />
          </div>
        ))}
      </>
    )

    const LineGraphGeneration = ({graphArray}) => (
      <>
        {graphArray.map(singleGraph => (
          <div>
            <div id={this.GraphIterator++} style={{ height: 500, width: 750 }}>
              <MyResponsiveLine data={singleGraph.data} />
            </div>
            <TextArea rows={2} />
          </div>
        ))}
      </>
    )

    var graphs = this.props.graphs;
    console.log(this.props.graphs);
    console.log(this.GraphIterator);
          
    // const ListGraphs = graphs.map((number) =>
    //   <MyResponsiveBar data={graphs[number]["data"]} dataKeys={graphs[number]["dataKeys"]} />
    // );

    return (
      <div style={{ height: graphs.length * 550 + 100, width: 775 }}>

        <div>
          <div id="divToPrint">
            <BarGraphGeneration graphArray={this.getGraphs(graphs, "Bar")} />
            
            <PieGraphGeneration graphArray={this.getGraphs(graphs, "Pie")} />
            <LineGraphGeneration graphArray={this.getGraphs(graphs, "Line")} />
          </div>
        </div>
        <div>
          <Button onClick={this.printDocument(this.props.graphs.length)} type="primary" icon="download" size="large">
            Download Report
          </Button>
        </div>
      </div>
    );
  }
}