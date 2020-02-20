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

    const { Option, OptGroup } = Select;

    var angerOptions = [];
    var cogOptions = [];
    var eduOptions = [];
    var employOptions = [];
    var subOptions = [];
    var totalOptions = [];
    var otherOptions = [];

    //PROGRAMS DO NOT LINE UP CORRECTLY WHEN BEING SELECTED
    //programVal is supposed to represent the value of the program
    //in the importedClients list, however it doesn't due to the
    //way the values are being pushed here.

    var programVal = 0;

    for (let i = 0; i < programs.Anger.length; i++) {
      angerOptions.push(<Option key={programVal}>{programs.Anger[i]}</Option>);
      programVal++;
    }
    for (let i = 0; i < programs.COGSkills.length; i++) {
      cogOptions.push(<Option key={programVal}>{programs.COGSkills[i]}</Option>);
      programVal++;
    }
    for (let i = 0; i < programs.Education.length; i++) {
      eduOptions.push(<Option key={programVal}>{programs.Education[i]}</Option>);
      programVal++;
    }
    for (let i = 0; i < programs.Employment.length; i++) {
      employOptions.push(<Option key={programVal}>{programs.Employment[i]}</Option>);
      programVal++;
    }
    for (let i = 0; i < programs.Substance.length; i++) {
      subOptions.push(<Option key={programVal}>{programs.Substance[i]}</Option>);
      programVal++;
    }
    for (let i = 0; i < programs.Other.length; i++) {
      otherOptions.push(<Option key={programVal}>{programs.Other[i]}</Option>);
      programVal++;
    }
    for (let i = 0; i < programs.Total.length; i++) {
      totalOptions.push(<Option key={programVal}>{programs.Total[i]}</Option>);
      programVal++;
    }

    var clientOptions = [];

    var clientVal = 0;

    for (let i = 0; i < clients["Clients"].length; i++) {

      //Check if name exists
      var name = clients["Clients"][i]["Client Name"];
      if (!name || name === "") {
        name = "Name not specified" + clientVal.toString(36);
      }

      clientOptions.push(<Option key={clientVal}>{name}</Option>);
      clientVal++;
    }

    return (

      <div style={{ height: 150, width: 1000 }}>

        <Select mode="multiple" style={{ width: '50%' }} placeholder="Anger" onChange={this.props.programChange}>
          {angerOptions}
        </Select>
        <Select mode="multiple" style={{ width: '50%' }} placeholder="COG" onChange={this.props.programChange}>
          {cogOptions}
        </Select>
        <Select mode="multiple" style={{ width: '50%' }} placeholder="Education" onChange={this.props.programChange}>
          {eduOptions}
        </Select>
        <Select mode="multiple" style={{ width: '50%' }} placeholder="Employment" onChange={this.props.programChange}>
          {employOptions}
        </Select>
        <Select mode="multiple" style={{ width: '50%' }} placeholder="Substance" onChange={this.props.programChange}>
          {subOptions}
        </Select>
        <Select mode="multiple" style={{ width: '50%' }} placeholder="Other" onChange={this.props.programChange}>
          {otherOptions}
        </Select>
        <Select mode="multiple" style={{ width: '50%' }} placeholder="Total" onChange={this.props.programChange}>
          {totalOptions}
        </Select>
        <Select mode="multiple" style={{ width: '50%' }} placeholder="Clients" onChange={this.props.clientChange}>
          {clientOptions}
        </Select>
      </div>
    );
  }
}
