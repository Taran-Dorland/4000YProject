// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import FileUploadForm from '../components/FileUploadForm';
import NivoGraph from '../components/GraphData';
import TableData from '../components/TableData';
import ExportData from '../components/ExportData';
//import SideBar from 'react-fixed-sidebar';
import { Button, PageHeader, Layout, Menu, Breadcrumb, Icon } from 'antd';

type Props = {};

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class HomePage extends Component<Props> {
  props: Props;

  state = {
    title: "Home Page",
    subTitle: "Import Data",
    collapsed: false,
    showGraph: false,
    showImport: true,
    showTable: false,
    showExport: false,
    csvData: "",
    importedClients: "",
    importedPrograms: "",
    button: false,
    key: "1",
  };

  //Handles the responsive sidebar
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });

  };


  //Handles button state and gets csv data
  handleCsvData = csvData => {
    console.log(csvData);

    var data = {};
    data.Clients = [];

    var programNames = {};
    programNames.Anger = [];
    programNames.COGSkills = [];
    programNames.Education = [];
    programNames.Employment = [];
    programNames.Substance = [];
    programNames.Total = [];
    programNames.Other = [];

    //Push program names to a separate JS Object
    for (let i = 5; i < csvData[0].length; i++) {

      var str = csvData[0][i];
      var strChk = str.toUpperCase();

      //Push program names to new JS Object
      if (strChk.substring(0, 5) === "ANGER") {
        programNames.Anger.push(str);
      } else if (strChk.substring(0, 10) === "COG SKILLS" || strChk.substring(0, 11) === "COG SKIILLS") {
        programNames.COGSkills.push(str);
      } else if (strChk.substring(0, 9) === "EDUCATION") {
        programNames.Education.push(str);
      } else if (strChk.substring(0, 10) === "EMPLOYMENT") {
        programNames.Employment.push(str);
      } else if (strChk.substring(0, 9) === "SUBSTANCE") {
        programNames.Substance.push(str);
      } else if (strChk.substring(0, 5) === "TOTAL" || strChk.substring(0, 14) === "TOTAL INDIRECT") {
        programNames.Total.push(str);
      } else {
        programNames.Other.push(str);
      }
    }

    console.log(programNames);

    for (let i = 1; i < csvData.length; i++) {

      var programs = [];

      for (let j = 5; j < csvData[i].length; j++) {

        //Push program name and hours
        programs.push({
          "Name": csvData[0][j],
          "Hours": csvData[i][j]
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

    }
    //convert a json object to a string
    console.log(JSON.stringify(data));

    console.log(JSON.stringify(this.getAngerClients(data)));
    
    console.log(JSON.stringify(this.getProgramMinClients(data, 2)));

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
                        "category": "anger",
                        "clients": this.getAngerClients(data)
                    },
                    {
                        "category": "cogSkills",
                        "clients": this.getCogSkillsClients(data)
                    },
                    {
                        "category": "min3",
                        "clients": this.getProgramMinClients(data)
                    }
                ]
            }
        ]
    });
    // this.setState({ importedData: data });
    // this.setState({ button: true });
  }

  getAngerClients(data) {
    let outputClients = data.Clients
      .filter(function(client) { return client.Programs
        .filter(function(program) { return Object.keys(program)[0].startsWith("ANGER") && Number(program[Object.keys(program)[0]]) > 0; })
          .length > 0;
    });

    //remove last totals element
    if(outputClients.length > 0 && outputClients[outputClients.length-1]["Client Name"] == "Totals") {
      outputClients.pop();
    }

    return outputClients;
  }
  
  getCogSkillsClients(data) {
    let outputClients = data.Clients
      .filter(function(client) { return client.Programs
        .filter(function(program) { return Object.keys(program)[0].startsWith("COG SKILLS") && Number(program[Object.keys(program)[0]]) > 0; })
          .length > 0;
    });

    //remove last totals element
    if(outputClients.length > 0 && outputClients[outputClients.length-1]["Client Name"] == "Totals") {
      outputClients.pop();
    }

    return outputClients;
  }
  
  getProgramMinClients(data, minPrograms) {
    let outputClients = data.Clients
      .filter(function(client) {
        //create groups of programs for current client
        let groupedPrograms = new Map();
        let uniquePrograms = 0;
        client.Programs.forEach(function(program) {
          let prefix = Object.keys(program)[0].split(":")[0];
          console.log("prefix: " + prefix);
          if(groupedPrograms.has(prefix.toLowerCase())) {
            groupedPrograms[prefix.toLowerCase()] = Number(groupedPrograms.get(prefix)) + 1;
          } else {
            groupedPrograms[prefix.toLowerCase()] = 1;
            //increment counter
            uniquePrograms++;
          }
        });

        console.log("groupedPrograms: " + JSON.stringify(groupedPrograms));
        
        return uniquePrograms >= minPrograms;
      });

    //remove last totals element
    console.log("outputClients: " + JSON.stringify(outputClients));
    if(outputClients.length > 0 && outputClients[outputClients.length-1]["Client Name"] == "Totals") {
      outputClients.pop();
    }

    return outputClients;
  }

  //
  handleHome = showImport => {
    console.log(showImport);
    this.setState(
      {
        showImport: true,
        title: "Home Page",
        subTitle: "Import Data",
        showGraph: false,
        showTable: false,
        showExport: false,
        key: "1"
      }
    );
  }

  //Handles graph generation state
  handleGraph = showGraph => {
    console.log(showGraph);
    this.setState(
      {
        showTable: false,
        title: "Graph Page",
        subTitle: "",
        showGraph,
        key: "2",
        showImport: false,
        showExport: false
      }
    );
  }

  //Handles table generation state
  handleTable = showTable => {
    console.log(showTable);
    this.setState(
      {
        showGraph: false,
        title: "Table Page",
        subTitle: "",
        showTable,
        key: "3",
        showImport: false,
        showExport: false
      }
    );
  }
  //Handles table generation state
  handleExport = showExport => {
    console.log(showExport);
    this.setState(
      {
        showGraph: false,
        showTable: false,
        title: "Export Page",
        subTitle: "",
        showExport,
        key: "4",
        showImport: false
      }
    );
  }
  clearData = csvData => {
    console.log("Clearing CSV data");
    this.setState(
      {
        button: false,
        csvData: ""
      }
    );
  }

  /*
    Docs for Antd Layouts: https://ant.design/components/layout/

    Summary:  Renders the app layout, including the sidebar. Also loads the FileUploadForm component
              into the a div displayed on the main page.
  */

  render() {

    const REACT_VERSION = React.version;

    return (
      <Layout style={{ minHeight: '100vh' }}>

        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}>

            <div className="logo" >
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" selectedKeys={this.state.key}>
                <Menu.Item key="1">
                  <span><Button type="link" icon="home" onClick={this.handleHome}>Home</Button></span>
                </Menu.Item>
                <Menu.Item key="2">
                  <span><Button type="link" icon="bar-chart" onClick={this.handleGraph} disabled={!this.state.button}>Graphs</Button></span>
                </Menu.Item>
                <Menu.Item key="3">
                  <span><Button type="link" icon="table" onClick={this.handleTable} disabled={!this.state.button}>Tables</Button></span>
                </Menu.Item>
                <Menu.Item key="4">
                  <span><Button type="link" icon="export" onClick={this.handleExport} disabled={!this.state.button}>Export</Button></span>
                </Menu.Item>
                <Menu.Item key="5">
                  <span><Button type="link" icon="setting" disabled={!this.state.button}>Settings</Button></span>
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <PageHeader title={this.state.title} subTitle={this.state.subTitle} />
          </Header>

          <Content style={{ margin: '0 16px' }}>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              {this.state.showImport ?

                <div style={{ padding: 24, display: "flex", flexDirection: "column", background: '#fff', alignItems: "center" }}>

                  <img src="img/Dalhousie-Header4.png" alt="DMU" />
                  <div style={{ padding: 10, display: "flex", flexDirection: "column", background: '#1890ff', alignItems: "center", borderRadius: 5, margin: 20 }}>
                    <p>WELCOME!</p>
                    <h3>Welcome to the Dalhousie Youth Services App!<br></br>This application generates modifiable reports that <br></br>
                      contain graphs and chart that show monthly, quaterly, <br></br>
                      and/or yearly reports. Please put your desired <br></br>CSV file for converting
                     </h3>

                    <FileUploadForm getCsvData={this.handleCsvData} />
                    <Button onClick={this.clearData}>Clear CSV</Button>
                  </div>
                </div> : null}
            </div>
            {this.state.showGraph ? <div style={{ padding: 24 }}> <NivoGraph importedClients={this.state.importedClients} importedPrograms={this.state.importedPrograms} /> </div> : null}
            {this.state.showTable ? <TableData csvData={this.state.csvData} /> : null}
            {this.state.showExport ? <ExportData importedClients={this.state.importedClients} /> : null}
          </Content>
          <Footer style={{ textAlign: 'center' }}>DMUⒸ REACT VERSION: {REACT_VERSION} NODE VERSION: {process.version}</Footer>
        </Layout>
      </Layout>
    );
  }
}
