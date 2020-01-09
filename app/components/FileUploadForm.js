// @flow
import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import { read } from 'fs';

type Props = {};

export default class FileUploadForm extends Component<Props> {
  props: Props;

  /*
    Docs for .CSV Reader: https://www.npmjs.com/package/react-csv-reader

    Summary:

  */

  render() {
    
    return (
      <div className="container input">
        <CSVReader
        cssClass="ant-form-item"
        cssInputClass=""
        label="Select DMU .csv file "
        onFileLoaded={this.props.getCsvData}
        />
      </div>
    );
  }
}