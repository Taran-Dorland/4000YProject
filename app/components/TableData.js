// @flow
import React, { Component } from 'react';
import { Table } from 'antd';
import InnerTable from '../components/TableInnerData';

type Props = {};

export default class TableData extends Component<Props> {
  props: Props;

  /*
    

  */

  render() {

    var importedData = this.props.csvData;

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        { title: 'Start Date', dataIndex: 'start', key: 'start' },
        { title: 'End Date', dataIndex: 'end', key: 'end' },
      ];

      //---------------------------------------------------------------------------------
      //
      const data = [];
      var i;
      for (i = 1; i < (importedData.length - 1); i++) {

        data[i - 1] = {
            key: i - 1,
            name: importedData[i][0],
            dob: importedData[i][4],
            gender: importedData[i][3],
            start: importedData[i][1],
            end: importedData[i][2],
        }
      }

      //---------------------------------------------------------------------------------
      //Record key identifies the client being output to each inner table
    return (
    <Table
        columns={columns}
        expandedRowRender={record => <InnerTable csvData={this.props.csvData} clientKey={record.key} />}
        dataSource={data}
    />
    );
  }
}
