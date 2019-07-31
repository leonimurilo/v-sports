import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ inputProps, value, label, name, id }) {
  const htmlId = id || `${label}-${value}`;
  return (
    <div className="radio-button">
      <input className="radio-button__input" id={htmlId} type="radio" name={name} value={value} {...inputProps} />
      <label className="radio-button__label" htmlFor={htmlId}>{label}</label>
    </div>
  )
}

RadioButton.propTypes = {
  inputProps: PropTypes.object,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
}

export default RadioButton

