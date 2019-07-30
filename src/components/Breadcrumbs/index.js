import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default class Breadcrumbs extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired, // todo: add shape
  }

  renderItems = () => {
    const { items } = this.props;
    const renderedItems = items.map((item, i) => {
      if (item.to) {
        return (<li key={`${item.text}${i}`}><Link to={item.to}>{item.text}</Link></li>);
      }
      return (<li key={`${item.text}${i}`}>{item.text}</li>);
    });
    const finalItems = [];
    renderedItems.forEach((item, index) => {
      // In this case, not a big problem to use index as key
      finalItems.push(<FontAwesomeIcon key={`${index}`} className="breadcrumbs__arrow" icon={faChevronRight} />);
      finalItems.push(item);
    });
    return finalItems;
  }

  render() {
    return (
      <nav className="breadcrumbs">
        <ul className="breadcrumbs__ul">
          <li><Link to="/"><FontAwesomeIcon className="breadcrumbs__home" icon={faHome} /></Link></li>
          {this.renderItems()}
        </ul>
      </nav>
    )
  }
}
