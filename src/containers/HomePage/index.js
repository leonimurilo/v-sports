// import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';

// import {
// } from 'selectors/';

import './style.scss';

const enhance = compose(
  // connect(state => ({
    // selectors
  // })),
  // connect(null, (dispatch, { geolocation }) => ({
    // action creators
  // }))
);

class HomePage extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
        <Link to="users">View users list</Link>
      </div>
    )
  }
}

export default enhance(HomePage);
