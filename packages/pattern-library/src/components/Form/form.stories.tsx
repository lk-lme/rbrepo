import React from 'react';
import { storiesOf } from '@storybook/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

storiesOf('Forms/Formik', module)
  .add('basic demo', () => (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors: { [x: string]: any } = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="email">Password</label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  ));
