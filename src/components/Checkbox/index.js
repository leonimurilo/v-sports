import React from 'react';
import PropTypes from 'prop-types';
import InputInstruction from 'components/InputInstruction';

import './style.scss';

function Checkbox(props) {
  const {
    field: { name, value, onChange, onBlur },
    id,
    label,
  } = props;

  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
       />
      <label className="checkbox__label" htmlFor={id}>
        <span className="checkbox__btn"/>
        {label}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  form: PropTypes.object,
  label: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  id: PropTypes.string,
}

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    label: PropTypes.string,
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    touched: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.array,
    ]),
    children: PropTypes.node,
    id: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  };

  handleChange = event => {
    const target = event.currentTarget;
    let valueArray = [...this.props.value] || [];

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }

    this.props.onChange(this.props.id, valueArray);
  };

  handleBlur = () => {
    this.props.onBlur(this.props.id, true);
  };

  render() {
    const { value, label, children, touched, error } = this.props;

    return (
      <div className="checkbox-group">
        <fieldset className="checkbox-group__set">
          <legend className="checkbox-group__legend">{label}</legend>
          <div className="checkbox-group__items">
            {React.Children.map(children, child => {
              return React.cloneElement(child, {
                field: {
                  value: value.includes(child.props.id),
                  onChange: this.handleChange,
                  onBlur: this.handleBlur
                }
              });
            })}
          </div>
        </fieldset>
        <InputInstruction touched={touched} error={error}/>
      </div>
    );
  }
}


export { Checkbox, CheckboxGroup };
