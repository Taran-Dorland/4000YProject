// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import FileUploadForm from '../components/FileUploadForm';
import NivoGraph from '../components/NivoSampleGraph';
import TableData from '../components/TableData';
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
    csvData: "",
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
    //console.log(csvData);
    this.setState({ csvData });
    this.setState({ button: true });

    //console.log(csvData[0]);
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
        showImport: false
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
    return (
      <Layout style={{ minHeight: '100vh' }}>
        
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <Sider style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,}}>

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
              <span><Button type="link" icon="export" disabled={!this.state.button}>Export</Button></span>
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
          
            <div style={{  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              {this.state.showImport ?
                
                <div style={{ padding: 24, display: "flex", flexDirection: "column",background: '#fff',  alignItems:"center" }}> 
                    
                    <img src="Dalhousie-Header4.png" alt="DMU"/>
                    <div style={{ padding: 10, display: "flex",flexDirection: "column",background: '#1890ff',  alignItems:"center", borderRadius:5, margin: 20}}>
                      <p>WELCOME!</p>
                      <h3>Welcome to the Dalhousie Youth Services App!<br></br>This application generates modifiable reports that <br></br>
                      contain graphs and chart that show monthly, quaterly, <br></br>
                      and/or yearly reports. Please put your desired <br></br>CSV file for converting
                     </h3>
                    
                  <FileUploadForm getCsvData={this.handleCsvData} />
                  <Button onClick={this.clearData}>Clear CSV</Button>
                  </div>
              </div>: null}
             </div>
            {this.state.showGraph ? <div style={{ padding: 24 }}> <NivoGraph csvData={this.state.csvData} /> </div> : null}
            {this.state.showTable ? <TableData csvData={this.state.csvData} /> : null}
          </Content>
          <Footer style={{ textAlign: 'center' }}>DMUⒸ</Footer>
          </Layout>
      </Layout>
    );
  }
}
