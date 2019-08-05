import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import './style.scss';


class HomePage extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="home-page">
          <Link className="home-page__link" to="users">
            <FontAwesomeIcon className="home-page__icon" icon={faUsers} />
            <span className="home-page__link-text">View users list</span>
          </Link>
      </div>
    )
  }
}

export default HomePage;
