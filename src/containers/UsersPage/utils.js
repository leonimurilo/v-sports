export const normalizeUserData = userData => {
  return ({
    ...userData,
    city: userData.address ? userData.address.city : null,
    rideInGroup: 'todo',
    dayOfWeek: userData.dayOfWeek,
    posts: userData.posts,
    albums: userData.albums,
    photos: userData.photos,
  })
}
