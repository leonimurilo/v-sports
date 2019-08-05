export const normalizeUserData = userData => {
  return ({
    ...userData,
    city: userData.address ? userData.address.city : null,
    posts: userData.posts,
    albums: userData.albums,
    photos: userData.photos,
  })
}
