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
    var importedClients = this.props.importedClients;

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        { title: 'Start Date', dataIndex: 'start', key: 'start' },
        { title: 'End Date', dataIndex: 'end', key: 'end' },
        { title: 'Indirect Total', dataIndex: 'indirtotal', key: 'indirtotal' },
        { title: 'Total', dataIndex: 'total', key: 'total' },
      ];

      //---------------------------------------------------------------------------------
      //
      const data = [];
      var i;
      for (i = 0; i < importedClients["Clients"].length - 1; i++) {

        console.log(i);

        data[i] = {
            key: i,
            name: importedClients["Clients"][i]["Client Name"],
            start: importedClients["Clients"][i]["Start Date"],
            end: importedClients["Clients"][i]["End Date"],
            gender: importedClients["Clients"][i]["Gender"],
            dob: importedClients["Clients"][i]["Date of Birth"],
            indirtotal: importedClients["Clients"][i]["Programs"][60]["Hours"],
            total: importedClients["Clients"][i]["Programs"][61]["Hours"]
        }
      }

      console.log(data);

      //---------------------------------------------------------------------------------
      //Record key identifies the client being output to each inner table
    return (
    <Table
        columns={columns}
        expandedRowRender={record => <InnerTable importedClients={this.props.importedClients} clientKey={record.key} />}
        dataSource={data}
    />
    );
  }
}
