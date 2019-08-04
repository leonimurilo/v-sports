import React from 'react';
import PropTypes from 'prop-types';
import InputInstruction from 'components/InputInstruction';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstruction: false,
    };
  }

  handleBlur = e => {
    this.setState({ showInstruction: false });
    this.props.onBlur(e);
  }

  handleFocus = () => {
    this.setState({ showInstruction: true });
  }

  render() {
    const { name, label, onChange, value, errors, touched, optional, inputProps, instruction } = this.props;
    const { showInstruction } = this.state;
    return (
      <div className="text-input">
        <label className="text-input__label">
          <span>{label || name}</span>
          {optional ? <span className="text-input__optional">Optional</span> : null}
        </label>
        <input
          type="text"
          name={name}
          className={touched[name] && errors[name] ? 'text-input__input text-input__input--error' : 'text-input__input'}
          onChange={onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={value}
          {...inputProps}
        />

        <InputInstruction showInstruction={showInstruction} instruction={instruction} touched={touched[name]} error={errors[name]}/>
      </div>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object,
  label: PropTypes.string,
  optional: PropTypes.bool,
}

export default TextInput

