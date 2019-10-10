// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import FileUploadForm from '../components/FileUploadForm';
import { PageHeader, Layout, Menu, Breadcrumb, Icon } from 'antd';

type Props = {};

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SettingsPage extends Component<Props> {
  props: Props;

  state = {
    collapsed: false,
  };

  //Handles the responsive sidebar
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  /*
    Docs for Antd Layouts: https://ant.design/components/layout/

    Summary:  Renders the app layout, including the sidebar. Also loads the FileUploadForm component
              into the a div displayed on the main page.
  */

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['5']} mode="inline">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
              <Link to={routes.HOME}></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="bar-chart" />
              <span>Graphs</span>
              <Link to={routes.GRAPH}></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="table" />
              <span>Tables</span>
              <Link to={routes.TABLE}></Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="export" />
              <span>Export Data</span>
              <Link to={routes.EXPORT}></Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="setting" />
              <span>Settings</span>
              <Link to={routes.SETTINGS}></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <PageHeader title="Settings Page" />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="test123" style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>This is a footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
