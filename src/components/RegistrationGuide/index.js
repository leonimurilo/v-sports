import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faLifeRing, faSmile } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function RegistrationGuide() {
  return (
    <div className="registration-guide">
      <div className="registration-guide__item">
        <p className="registration-guide__title">Need help?</p>
        <div className="registration-guide__content">
          <FontAwesomeIcon className="registration-guide__icon" icon={faLifeRing} />
          <div className="registration-guide__body">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="registration-guide__item">
        <p className="registration-guide__title">Why register?</p>
        <div className="registration-guide__content">
          <FontAwesomeIcon className="registration-guide__icon" icon={faHeartbeat} />
          <div className="registration-guide__body">
            Lorem idivsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className="registration-guide__item">
        <p className="registration-guide__title">What people are saying...</p>
        <div className="registration-guide__content">
          <FontAwesomeIcon className="registration-guide__icon" icon={faSmile} />
          <div className="registration-guide__body">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationGuide;

