import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { getUsers, removeUser, addUser } from 'actions/users';
import { selectUserList, isLoadingSelector } from 'reducers';
import Table from 'components/Table';
import SportInfo from 'components/SportInfo';
import Breadcrumbs from 'components/Breadcrumbs';
import Loading from 'components/Loading';
import AddUser from 'containers/AddUser';

import columns from './columns';
import { normalizeUserData } from './utils';

const simpleColumns = columns.reduce((acc, item) => ([...acc, item.acessor]), []);

import './style.scss';

const enhance = compose(
  connect(state => ({
    userList: selectUserList(state).map(user => normalizeUserData(user)),
    isLoading: isLoadingSelector(state),
  })),
  connect(null, dispatch => ({
    getUsers: () => dispatch(getUsers.request()),
    addUser: values => dispatch(addUser(values)),
    removeUser: email => dispatch(removeUser(email)),
  }))
);

class UsersPage extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    userList: PropTypes.array.isRequired, //todo: add shaped proptype
    removeUser: PropTypes.func.isRequired,
    addUser: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    }
  }

  componentDidMount() {
    this.props.getUsers();
  }

  filterUserList = (list, filter) => {
    return list.filter(user => {
      for(let index in simpleColumns) {
        const column = simpleColumns[index];
        if (user[column] && (typeof user[column] === 'string' || user[column].toString) && user[column].toString().toUpperCase().indexOf(filter.toUpperCase()) >= 0) {
          return true;
        }
      }
      return false;
    });
  }

  render() {
    const { userList, isLoading } = this.props;
    const { filter } = this.state;

    return (
      <div className="users-page">
        <Breadcrumbs items={[{ text: 'Current page'}]}/>
        <SportInfo type="Cycling" mode="Advanced" route="30 miles"/>
        <div className="text-input">
          <input
            type="text"
            name={name}
            className="text-input__input"
            onChange={e => { this.setState({ filter: e.target.value })}}
            value={filter}
          />

        </div>

        <div className="users-page__table-wrapper">
          {
            isLoading ? <div className="users-page__loading"><Loading/></div>
            :
            /* I could have used an external library like react-table */
            <Table
              columns={columns}
              data={filter ? this.filterUserList(userList, filter) : userList}
              keyField="email"
              onRemove={(data) => {
                this.props.removeUser(data.email);
              }}
            />
          }

        </div>
        <AddUser onSubmit={this.props.addUser} />
      </div>
    )
  }
}

export default enhance(UsersPage);
