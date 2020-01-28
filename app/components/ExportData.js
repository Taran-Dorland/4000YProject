import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactToPdf from "react-to-pdf";
import NivoGraph from './GraphData';

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
            <button onClick={toPdf}>Generate pdf</button>
          )}
        </ReactToPdf>

        <div style={{ width: 1250, height: 1250 }} ref={ref}>
          <NivoGraph csvData={this.props.importedData} />
        </div>
      </div>
    );
  }

}

