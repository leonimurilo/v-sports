import React from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  const { name, onChange, onBlur, value, errors, touched } = props;
  return (
    <div>
      <input
        type="text"
        name={name}
        className="text-input"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
      />
      {errors[name] && touched[name] && errors[name]}
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object,
}

export default TextInput

