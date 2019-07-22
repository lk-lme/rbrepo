import React from 'react';
import { storiesOf } from '@storybook/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormField from './../FormField';
import TextInput from './../TextInput';
import Radio from './../Radio';
import Checkbox from './../Checkbox';
import CheckboxSet from './../CheckboxSet';
import RadioSet from './../RadioSet';

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
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <FormField name="email" label="Email address">
            <TextInput type="email" />
          </FormField>

          <FormField name="terms">
            <CheckboxSet>
              <Checkbox label="I agree to the terms & conditions" />
            </CheckboxSet>
          </FormField>

          <FormField name="metal" label="Select your metals">
            <CheckboxSet>
              <Checkbox label="Bronze" value="bronze" />
              <Checkbox label="Silver" value="silver" />
              <Checkbox label="Gold" value="gold" />
            </CheckboxSet>
          </FormField>

          <FormField name="timeframe" label="Select your timeframe">
            <RadioSet>
              <Radio label="Six months" value="6m" />
              <Radio label="One year" value="12m" />
              <Radio label="Two years" value="24m" />
            </RadioSet>
          </FormField>

          <FormField name="password" label="Password">
            <TextInput type="password" />
          </FormField>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  ));
