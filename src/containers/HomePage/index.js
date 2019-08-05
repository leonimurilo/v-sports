import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

import './style.scss';


class HomePage extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="home-page">
        <h2 className="h2">Select a sport</h2>
        <Link className="home-page__link" to="sports/1">
          <FontAwesomeIcon className="home-page__icon" icon={faBicycle} />
          <span className="home-page__link-text">Cycling</span>
        </Link>
      </div>
    )
  }
}

export default HomePage;
