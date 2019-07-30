import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from './../FormField';
import Form from './../Form';
import TextInput from './../TextInput';
import Radio from './../Radio';
import Checkbox from './../Checkbox';
import Button from './../Button';

storiesOf('Forms/Form', module).add('basic demo', () => (
  <Form
    initialValues={{ email: '', password: '', ['bronze-details']: '' }}
    validate={(values: {[x: string]: any}) => {
      let errors: { [x: string]: any } = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values['bronze-details']) {
        errors['bronze-details'] = 'Bronze details are required';
      }

      return errors;
    }}
    onSubmit={(values, x) => {
      console.log(values);
      // console.log(Object.keys(values).filter(val => currentFields[val]));

      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   setSubmitting(false);
      // }, 400);
    }}
  >
    {// @ts-ignore
    ({
      handleSubmit,
      isSubmitting,
      errors,
      touched,
      values,
    }) => (
      <form onSubmit={handleSubmit}>
        <FormField name="email" label="Email address">
          <TextInput type="email" />
        </FormField>

        <FormField name="terms">
          <Checkbox label="I agree to the terms & conditions" />
        </FormField>

        <FormField name="metal" label="Select your metals">
          <Checkbox label="Bronze" value="bronze" />
          <Checkbox label="Silver" value="silver" />
          <Checkbox label="Gold" value="gold" />
        </FormField>

        {/* <FormField 
                name="bronze-details"
                label="Bronze details"
                condition={(values: object) => {
                  // @ts-ignore
                  return values.metal && values.metal.includes('bronze');
                }}
              >
                <TextInput type="text" />
              </FormField> */}

        {
        // @ts-ignore
        values.metal && values.metal.includes('bronze') && (
          <FormField name="bronze-details" label="Bronze details">
            <TextInput type="text" />
          </FormField>
        )
        }

        <FormField name="timeframe" label="Select your timeframe">
          <Radio label="Six months" value="6m" />
          <Radio label="One year" value="12m" />
          <Radio label="Two years" value="24m" />
        </FormField>

        <FormField name="password" label="Password">
          <TextInput type="password" />
        </FormField>

        <Button>Submit</Button>
      </form>
    )}
  </Form>
));
