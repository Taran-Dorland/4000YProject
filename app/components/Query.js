import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TableData from '../components/TableData';
//import QueryData from './QueryData';
import 'antd/dist/antd.css';
//import './index.css';
import { Checkbox, Row, Col } from 'antd';

type Props = {};

const onloadOptions = [
  { label: 'Anger', value: 101 },
  { label: 'Cog Skills', value: 102 },
  { label: 'max 3 programms', value: 103 },
  { label: 'range between 1 and 3', value: 104 },
];

export default class Query extends Component<Props>{
  props: Props;

  state = {
    checkedList: [],
    checkAll: false,
    showAnger: false,
    showCog: false,
    showMax3: false,
    showRange1to3: false,
    csvData: "",
    importedData: [],
    //showAngerClients: false,
    //ShowCogSkillsClients: false,
    //showEducationClients: false,
    // showMin3ervicesClients: false,
    button: true,
    tableData: []
  };

  handleCsvData(csvData, importedData) {

    console.log(importedData);

    this.setState({
      csvData,
      importedData,
      tableData: [
        {
          "startYear": 2016,
          "endYear": 2017,
          "data": [[
            {
              //return a list of the clients of that data
              "category": "angerClients", value: 101,
              "clients": this.getProgramClients(importedData, "ANGER")
            },
            {
              "category": "cogSkillsClients", value: 102,
              "clients": this.getProgramClients(importedData, "COG SKILLS")
            },
            {
              "category": "educationClients", value: 103,
              "clients": this.getProgramClients(importedData, "EDUCATION")
            },
            {
              "category": "min3ServicesClients", value: 104,
              "clients": this.getClientsWithRangeServices(importedData, 3)
            },
            {
              "category": "min3ServicesClients",
              "clients": this.getClientsWithRangeServices(importedData, 3)
            }
          ]]
        }
      ]
    });
  }

  // this.props.table(this.state.tableData);
  //QueryData.getProgramClients(QueryData.uploadedData, "ANGER");
  getProgramClients(importedData, programName) {
    
    let outputClients = importedData.filter(function (client) {
        return client.Programs.filter(function (program) { 
          return Object.keys(program)[0].toLowerCase().startsWith(programName.toLowerCase()) && Number(program[Object.keys(program)[0]]) > 0; }).length > 0;
      });

    //remove last totals element
    if (outputClients.length > 0 && outputClients[outputClients.length - 1]["Client Name"] == "Totals") {
      outputClients.pop();
    }

    return outputClients;
  }
  //*/
  ///

  getClientsWithRangeServices = (data, minServices, maxServices) => {
    //service names to ignore
    let ignoredServices = [
      "total direct",
      "administrative activities",
      "case reviews",
      "collateral contacts",
      "community involvement & collaboration",
      "contact with family",
      "program development & research",
      "total indirect",
      "total"
    ];

    // console.log("data.Clients.length: " + data.Clients.length);

    let outputClients = this.state.data.Clients
      .filter(function (client) {
        //array of services
        let services = [];

        client.Programs.forEach(function (program) {
          if (Number(program[Object.keys(program)[0]]) == 0) {
            return;
          }

          let prefix = Object.keys(program)[0].split(":")[0].toLowerCase();

          if (ignoredServices.includes(prefix)) {
            return;
          }

          if (!services.includes(prefix)) {
            //add to services
            services.push(prefix);
          }
        });

        // console.log(client["Client Name"] + ">> unique services (" + services.length + "): " + services);

        return maxServices === undefined ? services.length >= minServices : services.length >= minServices && services.length <= maxServices;
      });

    handleAnger = showAnger => {
      console.log(showAnger);
      this.setState(
        {
          showAnger,
        }
      );
    }
    handleCog = showCog => {
      console.log(showCog);
      this.setState(
        {
          showCog,
        }
      );
    }
    handleMax3 = showMax3 => {
      console.log(showMax3);
      this.setState(
        {
          showMax3,
        }
      );
    }
    handleRange1to3 = showRange1to3 => {
      console.log(showRange1to3);
      this.setState(
        {
          showRange1to3,
        }
      );
    }



    onCheck = (e) => {
      const values = onloadOptions.map(record => record.value);
      console.log(e);
      this.setState({
        checkAll: e.target.checked,
        checkedList: e.target.checked ? values : [],
      });

    }

    onGroupChange = (checkedList) => {
      this.setState({
        checkedList,
        checkAll: checkedList.length === onloadOptions.length,
      });

      console.log(checkedList);

      for (let i = 0; i < checkedList.length; i++) {
        console.log(checkedList[i]);

        if (checkedList[i] == 101) {
          this.setState({
            showAnger: true,

          });
        }
        if (checkedList[i] == 102) {
          this.setState({
            showCog: true,

          });
        }

        if (checkedList[i] == 103) {
          this.setState({
            showMax3: true,
          });
        }
        if (checkedList[i] == 104) {
          this.setState({
            showRange1to3: true,
          }
          );
        }


      }

      if (checkedList.length == 0) {
        this.setState({
          showAnger: false,
          showCog: false,
          showMax3: false,
          showRange1to3: false,

        });
      }
    }

    updateTableData = table => {
      this.setState({
        tableData: table
      })
    }
  }
  
  render() {

    this.handleCsvData(this.props.csvData, this.props.importedClients);

    return (
      <div>

        <Checkbox onChange={this.onCheck}
          checked={this.state.checkAll} >check all</Checkbox>


        <Checkbox.Group options={onloadOptions} onChange={this.onGroupChange} value={this.state.checkedList} style={{ width: '120%', marginLeft: '15%', fontWeight: 'lighter' }}>


        </Checkbox.Group>

        {this.state.showAnger ? <p>test</p> : null}
        {this.state.showCog ? <p>QUERY FOR COG</p> : null}
        {this.state.showMax3 ? <p>QUERY FOR MAX3</p> : null}


      </div>
    );
  }


}
//{this.state.tableData["data"][0]["clients"]}