
import React, { Component } from 'react';
import { Button } from 'antd';
import ReactDOM from 'react-dom';
//import ReactToPdf from "react-to-pdf";
//import NivoGraph from './GraphData';
import TableData from './TableData';


type Props = {};

export default class QueryData extends component<props> { //extends Component {
  props: Props;

this.setState({
        csvData,
       importedData: data,
       button: true,
        tableData: [
            {
                "startYear": 2016,
                "endYear": 2017,
                 "data": [
                     {
                        //return a list of the clients of that data
                         "category": "angerClients",
                         "clients": this.getProgramClients(data, "ANGER")
                     },
                    {
                         "category": "cogSkillsClients",
                         "clients": this.getProgramClients(data, "COG SKILLS")
                     },
                     {
                         "category": "min3ServicesClients",
                         "clients": this.getClientsWithRangeServices(data, 3)
                     }
                 ]
             }
         ]
     });
  //Handles button state and gets csv data
  handleCsvData(csvData) {
    console.log(csvData);

    var data = {};

    data.Clients = [];

    for (let i = 1; i < csvData.length; i++) {
      
      var programs = [];

      for (let j = 5; j < csvData[i].length; j++) {

        //Push program name and hours
        programs.push({
          [csvData[0][j]]: csvData[i][j]
        });
      }

      //Push Name, DOB, etc.
      data.Clients.push({
        [csvData[0][0]]: csvData[i][0],
        [csvData[0][1]]: csvData[i][1],
        [csvData[0][2]]: csvData[i][2],
        [csvData[0][3]]: csvData[i][3],
        [csvData[0][4]]: csvData[i][4],
        "Programs": programs
      });


      data.Clients.Programs = [];
    }

    uploadedData = data;
  //static uploadedData;

  //QueryData.getProgramClients(QueryData.uploadedData, "ANGER");
  getProgramClients(data, programName) {
    let outputClients = data.Clients
      .filter(function (client) {
        return client.Programs
          .filter(function (program) { return Object.keys(program)[0].toLowerCase().startsWith(programName.toLowerCase()) && Number(program[Object.keys(program)[0]]) > 0; })
          .length > 0;
      });

    //remove last totals element
    if (outputClients.length > 0 && outputClients[outputClients.length - 1]["Client Name"] == "Totals") {
      outputClients.pop();
    }

    return outputClients;
  }

  getClientsWithRangeServices(data, minServices, maxServices) {
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

    let outputClients = data.Clients
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

    //remove last totals element
    // console.log("outputClients: " + JSON.stringify(outputClients));

    if (outputClients.length > 0 && outputClients[outputClients.length - 1]["Client Name"] == "Totals") {
      outputClients.pop();
    }

    return outputClients;
  }

<<<<<<< HEAD
  render() {
    return (
      <div style={{ height: 400 }}>
        <QueryData
          tableData={this.state.tableData}
          onChange={tableData => this.setState({ tableData })}
        />
      </div>
    );
  }
}
  //Handles button state and gets csv data
  

    * /

    //convert a json object to a string
    // console.log(JSON.stringify(data));

    // console.log("anger clients: " + JSON.stringify(this.getProgramClients(data, "ANGER")));

    // console.log("cog skills clients: " + JSON.stringify(this.getProgramClients(data, "COG SKILLS")));

    // console.log("min 3 services clients: " + JSON.stringify(this.getClientsWithRangeServices(data, 3)));

    // console.log("min 2 services, max 3 services clients: " + JSON.stringify(this.getClientsWithRangeServices(data, 2, 3)));

    // this.setState({
    //     csvData,
    //     importedData: data,
    //     button: true,
    //     tableData: [
    //         {
    //             "startYear": 2016,
    //             "endYear": 2017,
    //             "data": [
    //                 {
    //                     //return a list of the clients of that data
    //                     "category": "angerClients",
    //                     "clients": this.getProgramClients(data, "ANGER")
    //                 },
    //                 {
    //                     "category": "cogSkillsClients",
    //                     "clients": this.getProgramClients(data, "COG SKILLS")
    //                 },
    //                 {
    //                     "category": "min3ServicesClients",
    //                     "clients": this.getClientsWithRangeServices(data, 3)
    //                 }
    //             ]
    //         }
    //     ]
    // });

    // this.state.tableData[0].data[0].clients.length

    // this.setState({ importedData: data });
    // this.setState({ button: true });
  //}

  // render() {

  //   console.log(this.props.importedClients);
  //   console.log(this.props.importedPrograms);

  //   var clients = this.props.importedClients;
  //   var programs = this.props.importedPrograms;

  //   const { TabPane } = Tabs;

  //   // function callback(key) {
  //   //   console.log(key);
  // }
//}