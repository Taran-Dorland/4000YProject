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

    var importedData = this.props.csvData;
    var importedClients = this.props.importedClients;
    
    //---------------------------------------------------------------------------------
    //Generates the programs and hours from the csv file
    var clientPrograms = [];
    var clientHours = [];
    var i;
    for (i = 0; i < importedData[0].length; i++) {
        if (i > 4) {
            clientPrograms.push(importedData[0][i]);
            clientHours.push(importedData[this.props.clientKey][i]);
        }
    }

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
      var j;
      for (j = 0; j < clientPrograms.length; j++) {
        
        data[j] = {
            key: j,
            program: clientPrograms[j],
            hours: clientHours[j],
        }
      }

    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    );
  }
}
