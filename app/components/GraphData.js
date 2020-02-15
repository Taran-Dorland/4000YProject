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
    programsSelected: "",
    clientsSelected: ""
  };

  /*
    Docs for Nivo Bar Graph: https://nivo.rocks/bar/

    Summary: Renders a bar graph with a high amount of customizability

  */

  //<GraphSelect importedClients={this.props.importedClients} importedPrograms={this.props.importedPrograms} />

  render() {

    console.log(this.props.importedClients);
    console.log(this.props.importedPrograms);

    var clients = this.props.importedClients;
    var programs = this.props.importedPrograms;

    const { TabPane } = Tabs;

    function callback(key) {
      console.log(key);
    }

    return (

      <div style={{ height: 500, width: 1000 }}>
        <GraphSelect importedClients={this.props.importedClients} importedPrograms={this.props.importedPrograms} selectedPrograms={this.state.programsSelected} selectedClients={this.state.clientsSelected} />
        <Tabs onChange={callback} type="card">
          <TabPane tab="Bar Chart" key="1">
            <BarGraph clientChange={this.onClientChange} programChange={this.onProgramChange} data={this.props.importedClients} dataPrograms={this.props.importedPrograms} selectedPrograms={this.state.programsSelected} selectedClients={this.state.clientsSelected} />
          </TabPane>
          <TabPane tab="Pie Chart" key="2">
            <PieGraph data={this.props.importedClients} />
          </TabPane>
          <TabPane tab="Line Chart" key="3">
            <LineGraph data={this.props.importedClients} />
          </TabPane>
        </Tabs>

        <Button shape="round" type="primary">
          Add to report
          <Icon type="right" />
        </Button>

        <Button onClick={this.addValue}></Button>

      </div>
    );
  }
}
