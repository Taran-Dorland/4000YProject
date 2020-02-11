import React, { Component } from 'react';
import { Button } from 'antd';
import ReactDOM from 'react-dom';
import ReactToPdf from "react-to-pdf";
import NivoGraph from './GraphData';
import TableData from './TableData';
import BarGraph from './NivoBarGraph';

import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

type Props = {};

export default class ExportData extends Component {
  props: Props;

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
  };

  render() {

    const ref = React.createRef();
    const options = {
      orientation: 'portrait',
      format: 'a4'
    };

    return (
      <div>
        <Button onClick={this.printDocument} type="primary" icon="download" size="large">
          Download Report
        </Button>

        <div id="divToPrint" style={{ width: 1250, height: 1250 }} ref={ref}>
          <BarGraph data={this.props.importedClients} />
          <BarGraph data={this.props.importedClients} />
          <BarGraph data={this.props.importedClients} />
          <BarGraph data={this.props.importedClients} />
        </div>
      </div>
    );
  }

}

