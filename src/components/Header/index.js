import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <Link className="header__logo" to="/">
            <div className="header__logo-icon">
              <FontAwesomeIcon icon={faVolleyballBall} />
            </div>
            <span className="header__title">Venturus Sports</span>
          </Link>
          <div className="header__right">
            Leoni Murilo de Lima
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
