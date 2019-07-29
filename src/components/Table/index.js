import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss';

export default class Table extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired, // could use custom function to check for duplicate column names and more
    data: PropTypes.array.isRequired,
    keyField: PropTypes.string.isRequired,
  }

  renderHeaders = () => {
    const { columns } = this.props;
    return columns.map(c => (<th className="table__header-item" key={c.acessor}>{c.header || c.acessor}</th>));
  }

  renderRow = rowData => {
    const { columns, keyField } = this.props;
    return columns.map(c => (
      <td
        className="table__cell"
        key={`${rowData[keyField]}->${c.acessor}`}
      >
        {c.render ? c.render(rowData[c.acessor], rowData) : rowData[c.acessor]}
      </td>
    ));
  }

  renderRows = () => {
    const { data, keyField } = this.props;
    return data.map((rowData, index) => (
      <tr
        className={`table__row ${index % 2 === 0 ? '' : 'table__row--dark'}`}
        key={rowData[keyField]}
      >
        {this.renderRow(rowData)}
      </tr>
    ));
  }

  render() {
    return (
    <table className="table">
      <tbody className="table__body">
        <tr className="table__header">
          {this.renderHeaders()}
        </tr>
        {this.renderRows()}
      </tbody>
    </table>
    )
  }
}
