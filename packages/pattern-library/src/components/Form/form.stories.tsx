import React from 'react';
import { storiesOf } from '@storybook/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormField from './../FormField';
import TextInput from './../TextInput';

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
          <FormField name="email" label="Email address" id="email">
            <TextInput type="email" />
            {/* {({ field }) => <TextInput type="email" {...field} />} */}
          </FormField>

          <FormField 
            name="password"
            label="Password"
          >
            <Field type="password" name="password" id="password" />
          </FormField>

          {/* <FormField name="metal" label="Choose metals">
            <Field type="checkbox" id="metal" name="metal" value="bronze" label="Bronze" />
            <Field type="checkbox" id="metal" name="metal" value="silver" label="Silver" />
          </FormField> */}


          {/* <FormField name="fav-food" label="Favorite food">
            <Field type="checkbox" name="fav-food" id="fav-food-pizza" value="pizza" />
            <label htmlFor="fav-food-pizza">Pizza</label>
            <Field type="checkbox" name="fav-food" id="fav-food-ramen" value="ramen"/>
            <label htmlFor="fav-food-ramen">Ramen</label>
          </FormField> */}

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  ));
