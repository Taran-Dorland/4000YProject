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
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        { title: 'Start Date', dataIndex: 'start', key: 'start' },
        { title: 'End Date', dataIndex: 'end', key: 'end' },
        { title: 'Indirect Total', dataIndex: 'indirtotal', key: 'indirtotal' },
        { title: 'Total', dataIndex: 'total', key: 'total' },
      ];

      //---------------------------------------------------------------------------------
      //
      let indTotal, total;
      for (let x = 0; x < importedClients["Clients"][0]["Programs"].length; x++) {

        if (importedClients["Clients"][0]["Programs"][x]["Name"] === "Total Indirect") {
          indTotal = x;
        }

        if (importedClients["Clients"][0]["Programs"][x]["Name"] === "Total") {
          total = x;
        }
      }

      const data = [];
      var i;
      for (i = 0; i < importedClients["Clients"].length - 1; i++) {

        console.log(i);

        data[i] = {
            key: i,
            name: importedClients["Clients"][i]["Client Name"],
            age: importedClients["Clients"][i]["Age"],
            start: importedClients["Clients"][i]["Start Date"],
            end: importedClients["Clients"][i]["End Date"],
            gender: importedClients["Clients"][i]["Gender"],
            dob: importedClients["Clients"][i]["Date of Birth"],
            indirtotal: importedClients["Clients"][i]["Programs"][indTotal]["Hours"],
            total: importedClients["Clients"][i]["Programs"][total]["Hours"]
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
