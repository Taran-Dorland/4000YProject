import React, { Component } from 'react';
import { Button } from 'antd';
import ReactDOM from 'react-dom';
import ReactToPdf from "react-to-pdf";
import NivoGraph from './GraphData';
import TableData from './TableData';
import BarGraph from './NivoBarGraph';
type Props = {};

export default class ExportData extends Component {
  props: Props;



  render() {

    const ref = React.createRef();
    const options = {
      orientation: 'landscape'
    };

    return (
      <div>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5}>
          {({ toPdf }) => (
            <Button onClick={toPdf} type="primary" icon="download" size="large">
              Download Report
            </Button>
          )}
        </ReactToPdf>

        <div style={{ width: 1250, height: 1250 }} ref={ref}>
          <BarGraph data={this.props.importedClients} />
        </div>
      </div>
    );
  }

}

