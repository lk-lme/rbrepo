import React from 'react';
import { storiesOf } from '@storybook/react';
import { Formik, Form } from 'formik';
import FormField from './../FormField';
import TextInput from './../TextInput';
import Radio from './../Radio';
import Checkbox from './../Checkbox';
import Button from './../Button';

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
            <Checkbox label="I agree to the terms & conditions" />
          </FormField>

          <FormField name="metal" label="Select your metals">
            <span>
              <Checkbox label="Bronze" value="bronze" />
            </span>
            <Checkbox label="Silver" value="silver" />
            <Checkbox label="Gold" value="gold" />
          </FormField>

          <FormField name="timeframe" label="Select your timeframe">
            <Radio label="Six months" value="6m" />
            <Radio label="One year" value="12m" />
            <Radio label="Two years" value="24m" />
          </FormField>

          <FormField name="password" label="Password">
            <TextInput type="password" />
          </FormField>

          <Button>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  ));
