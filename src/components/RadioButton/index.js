import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const RadioButton = (props) => {
  const {
    field: { name, value, onChange, onBlur },
    id,
    label,
  } = props;
  return (
    <div className="radio-button">
      <input
        name={name}
        id={id}
        type="radio"
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className="radio-button__input"
        {...props}
      />
      <label className="radio-button__label" htmlFor={id}>
        <span className="radio-button__btn"/>
        {label}
      </label>
    </div>
  )
}


const RadioButtonGroup = ({
  label,
  children
}) => {

  return (
    <div className="radio-group">
      <fieldset className="radio-group__set">
        <legend className="radio-group__legend">{label}</legend>
        <div className="radio-group__items">
          {children}
        </div>
      </fieldset>
    </div>
  );
};

RadioButtonGroup.propTypes = {
  value: PropTypes.string,
  error: PropTypes.object,
  touched: PropTypes.bool,
  children: PropTypes.node,
  label: PropTypes.string,

}

export { RadioButtonGroup, RadioButton };
