import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import './index.css';
import { Checkbox, Row, Col } from 'antd';


type Props = {};

export default class Query extends Component<Props>{


const onloadOptions = [
  { label: 'Anger', value: 101 },
  { label: 'Cog Skills', value: 102 },
  { label: 'max 3 programms', value: 103 },
  { label: 'range between 1 and 3', value: 104 },
];

<<<<<<< HEAD

export default class Query extends Component<Props>{

  props: Props;


  state = {
    checkedList: [],
    checkAll: false,
    showAnger: false,
    showCog: false,
    showMax3: false,
    showRange1to3: false,
  };

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

    render() {
      console.log();
      return (
        <div>
          <Checkbox onChange={this.onCheck}
            checked={this.state.checkAll} >check all</Checkbox>
            

          <Checkbox.Group options={onloadOptions} onChange={this.onGroupChange} value={this.state.checkedList} style={{ width: '120%', marginLeft: '15%', fontWeight: 'lighter' }}>


          </Checkbox.Group>
          
          {this.state.showAnger ? <p>QUERY FOR ANGER</p> : null}
          {this.state.showCog ? <p>QUERY FOR COG</p> : null}
          {this.state.showMax3 ? <p>QUERY FOR MAX3</p> : null}
          

        </div>
      );
    }

  
  }
