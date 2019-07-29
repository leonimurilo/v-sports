import axios from 'axios';

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');

// using post to avoid query parameter length restrictions in case of requesting preferences for many users
export const getUsersPreferences = userList => {
  return axios.post('http://localhost:9999/users/preferences', { users: userList });
};
