// import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { compose } from 'recompose';

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

class UsersPage extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
        list here
      </div>
    )
  }
}

export default enhance(UsersPage);
