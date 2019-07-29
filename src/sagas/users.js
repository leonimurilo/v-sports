import { put, call, takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'constants/actionTypes';
import * as api from 'services/api';
import { getUsers } from 'actions/users';

// basically, intercepts every request action to perform a real api request
export function* getUsersAsync() {
  try {
    const userResponse = yield call(api.getUsers);

    // preferences data api should always return an array with the same length as the one that was sent
    // and also return the data preserving the order of users
    const prefResponse = yield call(api.getUsersPreferences, userResponse.data.map(u => u.email));

    // merge data
    const finalData = userResponse.data.map((user, index) => ({...user, ...prefResponse.data[index]}))

    yield put(getUsers.success(finalData));
  } catch (error) {
    yield put(getUsers.failure(error));
    console.error({error});
  }
}

export default [
  takeEvery(actionTypes.GET_USERS.request, getUsersAsync),
]
