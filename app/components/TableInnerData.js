// @flow
import React, { Component } from 'react';
import { Table } from 'antd';

type Props = {};

export default class TableInnerData extends Component<Props> {
  props: Props;

  /*
    Docs: https://ant.design/components/table/


  */

  render() {

    //Debug info
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    var importedClients = this.props.importedClients;
    var clientID = this.props.clientKey;

    console.log("Inner table");
    console.log(importedClients);

    //---------------------------------------------------------------------------------
    //Sets the table columns
    const columns = [
        {
          title: 'Program',
          dataIndex: 'program',
          filters: [
            {
              text: 'Anger',
              value: 'ANGER',
            },
            {
              text: 'COG',
              value: 'COG',
              children: [
                  {
                      text: 'COG',
                      value: 'COG',
                  },
                  {
                      text: 'Cog',
                      value: 'Cog',
                  },
              ],
            },
            {
              text: 'Education',
              value: 'EDUCATION',
            },
            {
              text: 'Employment',
              value: 'EMPLOYMENT',
            },
            {
              text: 'Substance',
              value: 'SUBSTANCE',
            },
            {
              text: 'Total',
              value: 'Total',
            },
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.program.indexOf(value) === 0,
          sorter: (a, b) => a.program.length - b.program.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Hours',
          dataIndex: 'hours',
          sorter: (a, b) => a.hours - b.hours,
        },
      ];

      //---------------------------------------------------------------------------------
      //Generates the data to be set in the table
      const data = [];

      for (let j = 0; j < importedClients["Clients"][clientID]["Programs"].length; j++) {
        
        data[j] = {
            key: j,
            program: importedClients["Clients"][clientID]["Programs"][j]["Name"],
            hours: importedClients["Clients"][clientID]["Programs"][j]["Hours"],
        }
      }

    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    );
  }
}
