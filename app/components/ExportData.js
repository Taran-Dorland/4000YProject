import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

type Props = {};

export default class ExportData extends Component {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row"
    },
    section: {
      flexGrow: 1
    }
  });
  
  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Hello World!</Text>
        </View>
        <View style={styles.section}>
          <Text>We're inside a PDF!</Text>
        </View>
      </Page>
    </Document>
  );
