import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getUsers, removeUser } from 'actions/users';
import { selectUserList } from 'reducers';
import Table from 'components/Table';
import SportInfo from 'components/SportInfo';
import Breadcrumbs from 'components/Breadcrumbs';


import columns from './columns';
import { normalizeUserData } from './utils';

import './style.scss';

const enhance = compose(
  connect(state => ({
    userList: selectUserList(state).map(user => normalizeUserData(user))
  })),
  connect(null, dispatch => ({
    getUsers: () => dispatch(getUsers.request()),
    removeUser: email => dispatch(removeUser(email)),
  }))
);

class UsersPage extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    userList: PropTypes.array.isRequired, //todo: add shaped proptype
    removeUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { userList } = this.props;
    return (
      <div className="users-page">
        <Breadcrumbs items={[{ text: 'Current page'}]}/>
        <SportInfo type="Cycling" mode="Advanced" route="30 miles"/>

        <div className="users-page__table-wrapper">
          {/* I could have used an external library like react-table */}
          <Table
            columns={columns}
            data={userList}
            keyField="email"
            onRemove={(data) => {
              this.props.removeUser(data.email);
            }}
          />
        </div>
      </div>
    )
  }
}

export default enhance(UsersPage);
