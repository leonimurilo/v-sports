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
        <span>{instruction}</span>
      </div>
    )
  }
  return null;

}

InputInstruction.propTypes = {
  message: PropTypes.string,
  isError: PropTypes.bool,
}

export default InputInstruction;
