import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

type Props = {};

export default class ExportData extends Component<Props> {
  props: Props;

  /*


  */

render() {



// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);



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
            key: i,
            name: importedData[i][0],
            dob: importedData[i][4],
            gender: importedData[i][3],
            start: importedData[i][1],
            end: importedData[i][2],
        }
      }
      ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);

      //---------------------------------------------------------------------------------
      //Record key identifies the client being output to each inner table
    return (
        <MyDocument />
    
    );
  }
}
