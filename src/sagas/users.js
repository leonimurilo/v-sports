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

    const postsResp = yield call(api.getPosts);
    const albumsResp = yield call(api.getAlbums);
    const photosResp = yield call(api.getPhotos);

    // merge data
    const finalData = userResponse.data.map((user, index) => {
      const posts = postsResp.data.filter(post => post.userId === user.id);
      const albums = albumsResp.data.filter(album => album.userId === user.id);
      let numberOfPhotos = 0;

      for (let index = 0; index < albums.length; index++) {
        const album = albums[index];
        numberOfPhotos += photosResp.data.filter(photo => photo.albumId === album.id).length
      }

      return ({
        ...user,
        ...prefResponse.data[index],
        posts: posts.length,
        albums: albums.length,
        photos: numberOfPhotos,
      });
    })

    yield put(getUsers.success(finalData));
  } catch (error) {
    yield put(getUsers.failure(error));
  }
}

export default [
  takeEvery(actionTypes.GET_USERS.request, getUsersAsync),
]
