import { combineReducers } from 'redux';

import users, * as fromUsers from './users';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;


// selector shortcuts
export const selectUserList = state => fromUsers.selectUserList(state.users);
