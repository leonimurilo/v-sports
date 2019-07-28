import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Table extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired, // could use custom function to check for duplicate column names and more
    data: PropTypes.array.isRequired,
    keyField: PropTypes.string.isRequired,
  }

  renderHeaders = () => {
    const { columns } = this.props;
    return columns.map(c => (<th key={c.acessor}>{c.header || c.acessor}</th>));
  }

  renderRow = rowData => {
    const { columns, keyField } = this.props;
    return columns.map(c => (<td key={`${rowData[keyField]}->${c.acessor}`}>{rowData[c.acessor]}</td>));
  }

  renderRows = () => {
    const { data, keyField } = this.props;
    return data.map(rowData => (<tr key={rowData[keyField]} >{this.renderRow(rowData)}</tr>));
  }

  render() {
    return (
    <table>
      <tbody>
        <tr>
          {this.renderHeaders()}
        </tr>
        {this.renderRows()}
      </tbody>
    </table>
    )
  }
}
