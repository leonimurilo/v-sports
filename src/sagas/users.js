import { put, call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'constants/actionTypes';
import * as api from 'services/api';
import { getUsers } from 'actions/users';

// basically, intercepts every request action to perform a real api request
export function* getUsersAsync() {
  try {
    const { data } = yield call(api.getUsers);
    yield put(getUsers.success(data));
  } catch (error) {
    yield put(getUsers.failure(error));
  }
}

export default [
  takeEvery(actionTypes.GET_USERS.request, getUsersAsync),
]
