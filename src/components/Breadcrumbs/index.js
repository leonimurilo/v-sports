import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class Breadcrumbs extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired, // todo: add shape
  }

  render() {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__ul">
          <li><a href="#">Home</a></li>
          <li>Users</li>
        </ul>
      </nav>
    )
  }
}
