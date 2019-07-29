import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Logo from 'assets/images/logo.svg';
import './style.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <Link className="header__logo" to="/">
            {/* <Logo className="header__logo-pic" /> */}
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
