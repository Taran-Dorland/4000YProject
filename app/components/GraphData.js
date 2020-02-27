// @flow
import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import GraphSelect from './GraphSelect';
import BarGraph from './NivoBarGraph';
import PieGraph from './NivoPieGraph';
import LineGraph from './NivoLineGraph';
import { Tabs } from 'antd';
import { Pie } from '@nivo/pie';

type Props = {};

export default class GraphData extends Component<Props> {
  props: Props;
  
  state = {
    graphData: "",
    graphDataKeys: "",
    programsSelected: [],
    clientsSelected: [],
    pieProgram: 0,
    graphKey: 0
  };

  /*
    Docs for Nivo Bar Graph: https://nivo.rocks/bar/

    Summary: Renders a bar graph with a high amount of customizability

  */

  //<GraphSelect importedClients={this.props.importedClients} importedPrograms={this.props.importedPrograms} />

  onProgramChange = value => {

    console.log(value);

    var lastProgram = 0;
    if (value.length > 0) {
      lastProgram = value[value.length - 1];
      console.log("LAST PROGRAM: " + lastProgram);
    }

    this.setState({
      programsSelected: value,
      pieProgram: lastProgram
    });
  };

  onClientChange = value => {

    console.log(value);

    this.setState({
      clientsSelected: value
    });
  };

  tabKey = key => {

    console.log(key);

    this.setState({
      graphKey: key
    });
  };

  render() {

    console.log(this.props.importedClients);
    console.log(this.props.importedPrograms);

    var clients = this.props.importedClients;
    var programs = this.props.importedPrograms;

    const { TabPane } = Tabs;

    return (

      <div style={{ height: 500, width: 1000 }}>
        <GraphSelect clientChange={this.onClientChange} programChange={this.onProgramChange} importedClients={this.props.importedClients} importedPrograms={this.props.importedPrograms} />
        <Tabs onChange={this.tabKey} type="card">
          <TabPane tab="Bar Chart" key="1">
            <BarGraph graph={this.props.updateGraphs} data={this.props.importedClients} dataPrograms={this.props.importedPrograms} selectedPrograms={this.state.programsSelected} selectedClients={this.state.clientsSelected} />
          </TabPane>
          <TabPane tab="Pie Chart" key="2">
            <PieGraph data={this.props.importedClients} dataPrograms={this.props.importedPrograms} selectedProgram={this.state.pieProgram} selectedClients={this.state.clientsSelected} />
          </TabPane>
          <TabPane tab="Line Chart" key="3">
            <LineGraph data={this.props.importedClients} dataPrograms={this.props.importedPrograms} selectedPrograms={this.state.programsSelected} selectedClients={this.state.clientsSelected} />
          </TabPane>
        </Tabs>

      </div>
    );
  }
}
