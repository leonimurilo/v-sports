import { GET_USERS, ADD_USER, REMOVE_USER } from 'constants/actionTypes';
import { createAction } from './utils';

export const getUsers = {
  request: () => createAction(GET_USERS.request),
  success: data => createAction(GET_USERS.success, { data }),
  failure: error => createAction(GET_USERS.failure, { error }),
}

export const removeUser = email => createAction(REMOVE_USER, { email });
export const addUser = values => createAction(ADD_USER, { values });
