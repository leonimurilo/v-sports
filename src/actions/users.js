import { GET_USERS, ADD_USER, REMOVE_USER } from 'constants/actionTypes';
import { createAction } from './utils';

export const getUsers = {
  request: () => createAction(GET_USERS.request),
  success: data => createAction(GET_USERS.success, { data }),
  failure: error => createAction(GET_USERS.failure, { error }),
}

export const removeUser = email => createAction(REMOVE_USER, { email });
export const addUser = values => createAction(ADD_USER, { user: resolveNewUser(values) });



const resolveNewUser = values => {
  return ({
    id: 1,
    name: values.name,
    username: values.usernsame,
    email: values.email,
    address: {
      street: null,
      suite: null,
      city: values.city,
      zipcode: '',
      geo: null
    },
    phone: null,
    website: null,
    company: {
      name: null,
      catchPhrase: null,
      bs: null
    },
    rideInGroup: values.rideInGroup,
    dayOfWeek: values.dayOfWeek,
    posts: 0,
    albums: 0,
    photos: 0
  });
}
