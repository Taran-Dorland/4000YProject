// @flow
import React, { Component } from 'react';
import { Checkbox, Select, Tabs } from 'antd';

type Props = {};

export default class GraphSelect extends Component<Props> {
  props: Props;

  /*

    Summary:    Adds seleciton component that allows the user to select the data
                and type of graph they would like to view.

  */

  render() {

    console.log(this.props.importedClients);
    console.log(this.props.importedPrograms);

    var clients = this.props.importedClients;
    var programs = this.props.importedPrograms;

    const { Option } = Select;

    function addOption(arr, jsonArr) {

        for (let i = 0; i < jsonArr.length; i++) {
          arr.push(<Option key={jsonArr[i].toString(36)}>{jsonArr[i].toString(36)}</Option>);
        }
    }

    var angerOptions = [];
    var cogOptions = [];
    var eduOptions = [];
    var employOptions = [];
    var subOptions = [];
    var totalOptions = [];
    var otherOptions = [];

    console.log("THIS IS PROGRAMS ANGER: " + programs.Anger);

    addOption(angerOptions, programs.Anger);
    addOption(cogOptions, programs.COGSkills);
    addOption(eduOptions, programs.Education);
    addOption(employOptions, programs.Employment);
    addOption(subOptions, programs.Substance);
    addOption(totalOptions, programs.Total);
    addOption(otherOptions, programs.Other);

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
          {programs.Anger}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {programs.COGSkills}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {programs.Education}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {programs.Employment}
        </Select>
        <Select
          mode="multiple"
          style={{ width: '50%' }}
          placeholder="Please select"
          onChange={handleChange}
        >
          {programs.Other}
        </Select>
      </div>
    );
  }
}
