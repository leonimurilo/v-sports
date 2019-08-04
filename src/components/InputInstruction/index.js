import React from 'react';
import PropTypes from 'prop-types';

function InputInstruction({ showInstruction, instruction, error, touched }) {
  if (showInstruction) {
    return (
      <div className="input-instruction">
        <span>{instruction}</span>
      </div>
    )
  }

  if (touched && error) {
    return (
      <div className="input-instruction input-instruction--error">
        <span>{error}</span>
      </div>
    )
  }
  return null;

}

InputInstruction.propTypes = {
  instruction: PropTypes.string,
  showInstruction: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
}

export default InputInstruction;
