/* eslint-disable react/display-name */
import React from 'react';

const formatMapsURL = (lat, lng) => `https://maps.google.com/?q=${lat},${lng}`

export default [
  {
    header: 'Username',
    acessor: 'username',
  },
  {
    header: 'Name',
    acessor: 'name',
  },
  {
    header: 'E-mail',
    acessor: 'email',
  },
  {
    header: 'City',
    acessor: 'city',
    render: (city, { address }) => (<a rel="noopener noreferrer" target="_blank" href={formatMapsURL(address.geo.lat, address.geo.lng)} >{city}</a>),
  },
  {
    header: 'Ride in group',
    acessor: 'rideInGroup',
  },
  {
    header: 'Day of the week',
    acessor: 'dayOfWeek',
  },
  {
    header: 'Posts',
    acessor: 'posts',
  },
  {
    header: 'Albums',
    acessor: 'albums',
  },
  {
    header: 'Photos',
    acessor: 'photos',
  },
];
