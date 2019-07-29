import axios from 'axios';

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');
export const getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');
export const getAlbums = () => axios.get('https://jsonplaceholder.typicode.com/albums');
export const getPhotos = () => axios.get('https://jsonplaceholder.typicode.com/photos');

// using post to avoid query parameter length restrictions in case of requesting preferences for many users
export const getUsersPreferences = userList => {
  return axios.post('http://localhost:9999/users/preferences', { users: userList });
};
