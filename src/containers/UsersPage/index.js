import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getUsers } from 'actions/users';
import { selectUserList } from 'reducers';
import Table from 'components/Table';
import Breadcrumbs from 'components/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';


import columns from './columns';
import { normalizeUserData } from './utils';

import './style.scss';

const enhance = compose(
  connect(state => ({
    userList: selectUserList(state).map(user => normalizeUserData(user))
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
    const { userList } = this.props;
    return (
      <div className="users-page">
        <Breadcrumbs items={[]}/>
        <FontAwesomeIcon icon={faVolleyballBall} />

        <div className="users-page__table-wrapper">
          <Table
            columns={columns}
            data={userList}
            keyField="email"
          />
        </div>
      </div>
    )
  }
}

export default enhance(UsersPage);
