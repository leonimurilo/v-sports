import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getUsers } from 'actions/users';

// import {
// } from 'selectors/';

import './style.scss';

const enhance = compose(
  // connect(state => ({
    // selectors
  // })),
  connect(null, dispatch => ({
    getUsers: () => dispatch(getUsers.request()),
  }))
);

class UsersPage extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        list here
      </div>
    )
  }
}

export default enhance(UsersPage);
