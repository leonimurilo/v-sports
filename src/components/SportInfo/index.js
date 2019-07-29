import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

export default class SportInfo extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  }

  render() {
    const {type, mode, route} = this.props;
    return (
      <div className="sport-info">
        <div className="sport-info__item">
          <FontAwesomeIcon className="sport-info__icon" icon={faVolleyballBall} />
          <div className="sport-info__text-box">
            <p className="sport-info__label">Sport type</p>
            <p className="sport-info__value">{type}</p>
          </div>
        </div>
        <div className="sport-info__item">
          <FontAwesomeIcon className="sport-info__icon" icon={faVolleyballBall} />
          <div className="sport-info__text-box">
            <p className="sport-info__label">Mode</p>
            <p className="sport-info__value">{mode}</p>
          </div>
        </div>
        <div className="sport-info__item">
          <FontAwesomeIcon className="sport-info__icon" icon={faVolleyballBall} />
          <div className="sport-info__text-box">
            <p className="sport-info__label">Route</p>
            <p className="sport-info__value">{route}</p>
          </div>
        </div>
      </div>
    )
  }
}
