
import React, { Component } from 'react';
import { Button } from 'antd';
import { csvData } from './components/HomePage';
import { Data } from './components/HomePage';
import { importedData } from './components/HomePage';
import { Button, PageHeader, Layout, Menu, Breadcrumb, Icon } from 'antd';
import ReactDOM from 'react-dom';
//import ReactToPdf from "react-to-pdf";
//import NivoGraph from './GraphData';
import TableData from './TableData';


type Props = {};

export default class QueryData extends component<props> { //extends Component {
  props: Props;

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

    const onloadOprions = [

      {
        "startYear": 2016,
        "endYear": 2017,
        "data": [
          {
            //return a list of the clients of that data
            "category": "angerClients", value: 101
             "clients": this.getProgramClients(data, "ANGER")
          },
          {
            "category": "cogSkillsClients", value: 102
             "clients": this.getProgramClients(data, "COG SKILLS")
          },
          {
            "category": "educationClients", value: 103
          "clients": this.getProgramClients(data, "EDUCATION")
          },
          {
            "category": "min3ServicesClients", value: 104
             "clients": this.getClientsWithRangeServices(data, 3)
          }
         {
            "category": "min3ServicesClients",
            "clients": this.getClientsWithRangeServices(data, 3)
          }
        ]
      }
    ];


    this.setState({
      csvData,
      importedData: data,
      showAngerClients: false,
      ShowCogSkillsClients: false,
      showEducationClients: false,
      showMin3ervicesClients: false,
      importedData: data,
      button: true,
      tableData: [
        {
          "startYear": 2016,
          "endYear": 2017,
          "data": [
            {
              //return a list of the clients of that data
              "category": "angerClients", value: 101
                         "clients": this.getProgramClients(data, "ANGER")
            },
            {
              "category": "cogSkillsClients", value: 102
                         "clients": this.getProgramClients(data, "COG SKILLS")
            },
            {
              "category": "educationClients", value: 103
                      "clients": this.getProgramClients(data, "EDUCATION")
            },
            {
              "category": "min3ServicesClients", value: 104
                         "clients": this.getClientsWithRangeServices(data, 3)
            }
                     {
              "category": "min3ServicesClients",
              "clients": this.getClientsWithRangeServices(data, 3)
            }
          ]
        }
      ]
    });

    handleEducationClients = showEducationClients => {
      console.log(showEducationClients);
      this.setState(
        {
          showEducationClients,
        }
      );
    }
    handleCogSkillsClients = ShowCogSkillsClients => {
      console.log(ShowCogSkillsClients);
      this.setState(
        {
          ShowCogSkillsClients,
        }
      );
    }
    handleAngerClients = showAngerClients => {
      console.log(showAngerClients);
      this.setState(
        {
          showAngerClients,
        }
      );
    }
    handleMin3ervicesClients = showMin3ervicesClients => {
      console.log(showMin3ervicesClients);
      this.setState(
        {
          showMin3ervicesClients,
        }
      );
    }

    //QueryData.getProgramClients(QueryData.uploadedData, "ANGER");
    onProgramClients = (data, programName) => {
      let outputClients = this.state.data.Clients
        .filter(function (client) {
          return client.Programs
            .filter(function (program) { return Object.keys(program)[0].toLowerCase().startsWith(programName.toLowerCase()) 
              && Number(program[Object.keys(program)[0]]) > 0; })
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

          return maxServices === undefined ? services.length >= minServices : services.length >= minServices && 
          services.length <= maxServices;
        });

      //remove last totals element
      // console.log("outputClients: " + JSON.stringify(outputClients));

      if (outputClients.length > 0 && outputClients[outputClients.length - 1]["Client Name"] == "Totals") {
        outputClients.pop();
      }

      return outputClients;
    }


    render() {



      return (
        <div style={{ height: 400 }}>
                <div className="logo" >
              <Menu selectedKeys={this.state.key}>
                <Menu.Item key="101">
                  <p onClick={this.handleEducationClients}></p>
                </Menu.Item>
                <Menu.Item key="102">
                  <p onClick={this.handleCogSkillsClients}></p>
                </Menu.Item>
                <Menu.Item key="103">
                  <p onClick={this.handleAngerClients}></p>
                </Menu.Item>
                <Menu.Item key="104">
                  <p onClick={this.handleMin3ervicesClients}></p>
                </Menu.Item>

              </Menu>
            </div>
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