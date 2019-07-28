import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getUsers } from 'actions/users';
import { selectUserList } from 'reducers';

// import {
// } from 'selectors/';

import './style.scss';

const enhance = compose(
  connect(state => ({
    userList: selectUserList(state)
  })),
  connect(null, dispatch => ({
    getUsers: () => dispatch(getUsers.request()),
  }))
);

class UsersPage extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    userList: PropTypes.array.isRequired //todo: add shaped proptype
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        {this.props.userList.map(item => <p key={item.email}>{item.email}</p>)}
      </div>
    )
  }
}

export default enhance(UsersPage);
