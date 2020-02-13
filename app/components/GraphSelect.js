// @flow
import React, { Component } from 'react';
import { Checkbox, Select, Option, Tabs } from 'antd';

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

    function addOption(arr, jsonArr, keyValue) {

      for (let i = 10; i < jsonArr.length; i++) {
        console.log(jsonArr[i]);
        arr += <Option key={keyValue.toString(36)} value={keyValue}></Option>;
        keyValue++;
      }
      return keyValue;
    }

    var angerOptions = [];
    var cogOptions = [];
    var eduOptions = [];
    var employOptions = [];
    var subOptions = [];
    var totalOptions = [];
    var otherOptions = [];

    var keyVal = 0;

    for (let i = 0; i < programs.Anger; i++) {
      angerOptions.push(<Option key={keyValue.toString(36)} value={keyValue}></Option>);
    }

    // keyVal = addOption(angerOptions, programs.Anger, keyVal);
    // keyVal = addOption(cogOptions, programs.COGSkills, keyVal);
    // keyVal = addOption(eduOptions, programs.Education, keyVal);
    // keyVal = addOption(employOptions, programs.Employment, keyVal);
    // keyVal = addOption(subOptions, programs.Substance, keyVal);
    // keyVal = addOption(totalOptions, programs.Total, keyVal);
    // keyVal = addOption(otherOptions, programs.Other, keyVal);

    console.log("ANGER OPTIONS: " + angerOptions);

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

        <Select mode="multiple" style={{ width: '50%' }} placeholder="Please select" onChange={handleChange}>
          {programs.Anger}
        </Select>
        
      </div>
    );
  }
}
