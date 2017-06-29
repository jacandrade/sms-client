import React, { Component } from 'react';
import XLSX from 'xlsx';
import parser from './util.js';


class Sms extends Component {
    constructor(props) {
        super(props);
        this.handleFile = parser;
    }

  render() {
    return (
        <div className="card">
            <h3 className="card-header">Brand SMS</h3>
            <div className="card-block">
                <h4 className="card-title">Envio de SMS</h4>
                <p className="card-text">Selecione o relatório .xls extraído do sistema.</p>
                    <input type="file" id="file" onChange={ this.handleFile } />
            </div>
        </div>
    );
  }
}

export default Sms;

