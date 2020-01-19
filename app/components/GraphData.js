// @flow
import React, { Component } from 'react';
import { Checkbox, Select, Tabs } from 'antd';
import BarGraph from './NivoBarGraph';

type Props = {};

export default class GraphData extends Component<Props> {
  props: Props;

  /*
    Docs for Nivo Bar Graph: https://nivo.rocks/bar/

    Summary: Renders a bar graph with a high amount of customizability

  */

  render() {

    console.log(this.props.csvData);

    var thisData = this.props.csvData;

    const { Option } = Select;

    //Options for the checkbox group
    const angerOptions = [];
    const cogOptions = [];
    const eduOptions = [];
    const employmentOptions = [];
    const substanceOptions = [];
    const otherOptions = [];
    for (let i = 5; i < thisData[0].length; i++) {

      if (thisData[0][i].toUpperCase().substring(0, 5) === "ANGER") {
        angerOptions.push(<Option key={thisData[0][i].toString(36)}>{thisData[0][i].toString(36)}</Option>);
      } else if (thisData[0][i].toUpperCase().substring(0, 3) === "COG") {
        cogOptions.push(<Option key={thisData[0][i].toString(36)}>{thisData[0][i].toString(36)}</Option>);
      } else if (thisData[0][i].toUpperCase().substring(0, 9) === "EDUCATION") {
        eduOptions.push(<Option key={thisData[0][i].toString(36)}>{thisData[0][i].toString(36)}</Option>);
      } else if (thisData[0][i].toUpperCase().substring(0, 10) === "EMPLOYMENT") {
        employmentOptions.push(<Option key={thisData[0][i].toString(36)}>{thisData[0][i].toString(36)}</Option>);
      } else if (thisData[0][i].toUpperCase().substring(0, 9) === "SUBSTANCE") {
        substanceOptions.push(<Option key={thisData[0][i].toString(36)}>{thisData[0][i].toString(36)}</Option>);
      } else {
        otherOptions.push(<Option key={thisData[0][i].toString(36)}>{thisData[0][i].toString(36)}</Option>);
      }
    }

    //Options for the select box
    const children = [];
    for (let i = 1; i < thisData.length; i++) {

      if (!thisData[i][0]) {
        thisData[i][0] = "no name specified" + i.toString();
      }

      children.push(<Option key={thisData[i][0].toString(36)}>{thisData[i][0].toString(36)}</Option>);
      console.log("Pushed: " + thisData[i][0]);
    }

    function handleChange(value) {

      console.log(`selected ${value}`);
    }

    function handleNameChange(value) {

      for (let i = 0; i < value.length; i++) {

        var dataToAdd = {
          "Client Name": value[i],
        }

        data.push(dataToAdd);
      }
      console.log(`selected ${value}`);
    }

    return (

      <div style={{ height: 500, width: 1000 }}>

        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {angerOptions}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {cogOptions}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {eduOptions}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {employmentOptions}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {otherOptions}
        </Select>


        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleNameChange}
        >
          {children}
        </Select>

        <BarGraph data={thisData} />
      </div>
    );
  }
}
