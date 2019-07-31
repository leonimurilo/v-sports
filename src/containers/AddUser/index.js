import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Formik } from 'formik';
import RadioButton from 'components/RadioButton';

import './style.scss';


export default class AddUser extends Component {

  renderRideInGroup = () => {

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

                  <RadioButton inputProps={ { defaultChecked: true, onChange: handleChange, onBlur: handleBlur } } value="Always" label="Always" name="rideInGroup"/>
                  <RadioButton inputProps={ { onChange: handleChange, onBlur: handleBlur } } value="Sometimes" label="Sometimes" name="rideInGroup"/>
                  <RadioButton inputProps={ { onChange: handleChange, onBlur: handleBlur } } value="Never" label="Never" name="rideInGroup"/>

                  <input id="c1" type="checkbox" name="dayOfWeek" value="Sun"/>
                  <label htmlFor="c1">Sun</label>
                  <input id="c2" type="checkbox" name="dayOfWeek" value="Mon"/>
                  <label htmlFor="c2">Mon</label>
                  <input id="c3" type="checkbox" name="dayOfWeek" value="Tue"/>
                  <label htmlFor="c3">Tue</label>
                  <input id="c4" type="checkbox" name="dayOfWeek" value="Wed"/>
                  <label htmlFor="c4">Wed</label>
                  <input id="c5" type="checkbox" name="dayOfWeek" value="Thu"/>
                  <label htmlFor="c5">Thu</label>
                  <input id="c6" type="checkbox" name="dayOfWeek" value="Fri"/>
                  <label htmlFor="c6">Fri</label>
                  <input id="c7" type="checkbox" name="dayOfWeek" value="Sat"/>
                  <label htmlFor="c7">Sat</label>
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
