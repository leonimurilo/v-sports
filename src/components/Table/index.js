import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

export default class Table extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired, // could use custom proptype function to check for duplicate column names and more
    data: PropTypes.array.isRequired,
    keyField: PropTypes.string.isRequired,
    onRemove: PropTypes.bool.isRequired,
  }

  renderHeaders = () => {
    const { columns, onRemove } = this.props;
    const cols = columns.map(c => (<th className="table__header-item" key={c.acessor}>{c.header || c.acessor}</th>));

    if (onRemove) {
      return [...cols, <th className="table__header-item" key="__removable__"></th>]
    }
    return cols;
  }

  renderRow = (rowData, index) => {
    const { columns, onRemove, keyField } = this.props;
    const row = columns.map(c => (
      <td
        className="table__cell"
        key={`${rowData[keyField]}->${c.acessor}`}
      >
        {c.render ? c.render(rowData[c.acessor], rowData) : rowData[c.acessor]}
      </td>
    ));

    if (onRemove) {
      return [...row, <td key="td__removable"><FontAwesomeIcon onClick={() => { onRemove(rowData, index); }} className="table__trash" title="Remove" icon={faTrashAlt} /></td>];
    }
    return row;
  }

  renderRows = () => {
    const { data, keyField } = this.props;
    return data.map((rowData, index) => (
      <tr
        className={`table__row ${index % 2 === 0 ? '' : 'table__row--dark'}`}
        key={rowData[keyField]}
      >
        {this.renderRow(rowData, index)}
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
