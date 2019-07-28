import * as actionTypes from 'constants/actionTypes';

const defaultState = {
  users: [],
  isLoading: false,
  error: null,
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.GET_USERS.request: {
      return ({ ...state, isLoading: true });
    }
    case actionTypes.GET_USERS.success: {
      return ({
        ...state,
        isLoading: false,
        users: action.payload.data
      });
    }
    case actionTypes.GET_USERS.failure: {
      return ({
        ...state,
        isLoading: false,
        error: action.payload.error
      });
    }
    default:
      return state;
  }
}
