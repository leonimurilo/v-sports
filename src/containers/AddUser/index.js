import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import { Checkbox, CheckboxGroup } from 'components/Checkbox';
import { RadioButton, RadioButtonGroup } from 'components/RadioButton';

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
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1000);
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
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && errors.username}

                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && errors.name}

                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <div>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                  {errors.city && touched.city && errors.city}

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

              <div>
              <button type="submit" disabled={isSubmitting}>Submit</button>
              <button type="button" disabled={isSubmitting} onClick={handleReset}>Discard</button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    )
  }
}
