import { GET_USERS } from 'constants/actionTypes';
import { createAction } from './utils';

export const getUsers = {
  request: () => createAction(GET_USERS.request),
  success: data => createAction(GET_USERS.success, { data }),
  failure: error => createAction(GET_USERS.failure, { error }),
}
