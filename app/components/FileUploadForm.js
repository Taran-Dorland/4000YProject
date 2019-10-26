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
      <div className="container">
        <CSVReader
        cssClass="ant-form-item"
        cssInputClass="button"
        label="Select CSV with secret Death Star statistics"
        onFileLoaded={this.props.getCsvData}
        />
      </div>
    );
  }
}