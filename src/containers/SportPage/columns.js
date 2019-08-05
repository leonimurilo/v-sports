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
    render: email => (<a href={`mailto:${email}`}>{email}</a>)
  },
  {
    header: 'City',
    acessor: 'city',
    render: (city, { address }) => {
      if (address.city) {
        if (address && address.geo) {
          return (<a rel="noopener noreferrer" target="_blank" href={formatMapsURL(address.geo.lat, address.geo.lng)} >{city}</a>);
        }
        return <span>{city}</span>
      }

      return null;
    },
  },
  {
    header: 'Ride in group',
    acessor: 'rideInGroup',
  },
  {
    header: 'Day of the week',
    acessor: 'dayOfWeek',
    render: options => {
      if (options && Array.isArray(options)) {
        if (options.length === 7) {
          return (<span>Every day</span>)
        }
        return (<span>{options.join(', ')}</span>)
      }

      return null;
    },
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
