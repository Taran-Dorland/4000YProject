// @flow
import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import { read } from 'fs';
<<<<<<<
import ReactDOM from 'react-dom'
=======
import { Upload, Button } from 'antd';
import styles from './Home.css';
>>>>>>>

type Props = {};

export default class FileUploadForm extends Component<Props> {
  props: Props;

  /*
    Docs for .CSV Reader: https://www.npmjs.com/package/react-csv-reader

    Summary:

  */

  render() {
    
    return (
      <div className="container">
        <p>
        <div>
        <CSVReader
        cssClass="ant-form-item"
        cssInputClass=""
        label="Select DMU .csv file "
        onFileLoaded={this.props.getCsvData}
        //inputStyle={{color: 'red'}}
        />
      </div>
      </p>
      </div>
    );
  }
}