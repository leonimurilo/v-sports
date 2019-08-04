import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { Checkbox, CheckboxGroup } from 'components/Checkbox';
import { RadioButton, RadioButtonGroup } from 'components/RadioButton';
import TextInput from 'components/TextInput';

import './style.scss';

const daysOptions = [
  {value: 'Sun', label: 'Sun'},
  {value: 'Mon', label: 'Mon'},
  {value: 'Tue', label: 'Tue'},
  {value: 'Wed', label: 'Wed'},
  {value: 'Thu', label: 'Thu'},
  {value: 'Fri', label: 'Fri'},
  {value: 'Sat', label: 'Sat'},
];

const rideOptions = [
  {value: 'Always', label: 'Always'},
  {value: 'Sometimes', label: 'Sometimes'},
  {value: 'Never', label: 'Never'},
];

export default class AddUser extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  renderRideInGroup = () => {
    return rideOptions.map(opt => (
      <Field
        key={opt.value}
        component={RadioButton}
        name="rideInGroup"
        id={opt.value}
        label={opt.label}
      />
    ))
  }

  renderDaysOfWeek = () => {
    return daysOptions.map(opt => (
      <Field
        key={opt.value}
        component={Checkbox}
        name="dayOfWeek"
        id={opt.value}
        label={opt.label}
      />
    ))
  }
  validateFields = values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length < 8) {
      errors.username = 'Must have at least 8 characters';
    }

    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3) {
      errors.name = 'Must have at least 3 characters';
    }

    if (values.dayOfWeek.length < 1) {
      errors.dayOfWeek = 'At least one day must be selected';
    }

    return errors;
  }

  render() {
    return (
      <div className="add-user">
        <Formik
          initialValues={{
            email: '',
            name: '',
            username: '',
            city: '',
            rideInGroup: 'Always',
            dayOfWeek: ['Sun'],
          }}
          validate={this.validateFields}
          onSubmit={(values, { setSubmitting }) => {
            this.props.onSubmit(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isSubmitting,
            setFieldTouched,
            setFieldValue,
          }) => (
            <form className="add-user__content" onSubmit={handleSubmit}>
              <div className="add-user__fields">
                <div className="add-user__row">
                  <TextInput
                    name="username"
                    label="Username"
                    instruction="Instructions to show on input focus."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    errors={errors}
                    touched={touched}
                  />
                  <TextInput
                    name="name"
                    label="Name"
                    instruction="Instructions to show on input focus."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    errors={errors}
                    touched={touched}
                  />
                  <TextInput
                    name="email"
                    label="E-mail"
                    instruction="Instructions to show on input focus."
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div className="add-user__row">
                  <TextInput
                    name="city"
                    label="City"
                    instruction="Instructions to show on input focus."
                    optional
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    errors={errors}
                    touched={touched}
                  />

                  <RadioButtonGroup
                    id="rideInGroup"
                    label="Ride in group?"
                    value={values.rideInGroup}
                    error={errors.rideInGroup}
                    touched={touched.rideInGroup}
                  >
                    {this.renderRideInGroup()}
                  </RadioButtonGroup>

                  <CheckboxGroup
                    id="dayOfWeek"
                    label="Days of the week"
                    value={values.dayOfWeek}
                    error={errors.dayOfWeek}
                    touched={touched.dayOfWeek}
                    onChange={setFieldValue}
                    onBlur={setFieldTouched}
                  >
                    {this.renderDaysOfWeek()}
                  </CheckboxGroup>
                </div>
              </div>

              <div className="add-user__menu">
                <button className="button u-margin-right-small" type="submit" disabled={isSubmitting}>Save</button>
                <button className="button button--sec" type="button" disabled={isSubmitting} onClick={handleReset}>Discard</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}
