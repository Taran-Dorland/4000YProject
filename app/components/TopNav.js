/*
  Docs for Antd nav: https://ant.design/components/menu/

  Summary:  A placeholder function to swap between different charts to
            display the imported data
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import { Menu, Icon } from 'antd';

type Props = {};

const { SubMenu } = Menu;

export default class TopNav extends Component<Props> {
    props: Props;

    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
  
    render() {
      return (
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="bar">
          <Icon type="bar-chart" />
          Bar Graph
        </Menu.Item>
        <Menu.Item key="line">
          <Icon type="line-chart" />
          Line Graph
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              <Icon type="setting" />
              Navigation Three - Submenu
            </span>
          }
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      );
    }
  }