import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from './../FormField';
import Form from './../Form';
import SelectRepeater from '../SelectRepeater';
import TextInput from './../TextInput';
import Radio from './../Radio';
import Checkbox from './../Checkbox';
import Select from './../Select';
import { SingleDatePicker } from './../DatePicker';
import Button from './../Button';
import Stack from './../Stack';

storiesOf('Forms/Form', module)
  .add('basic demo', () => (
    <div
      style={{
        padding: '2rem',
        backgroundColor: 'hsla(var(--t-brand-primary-hsl), 0.03)',
      }}
    >
      <Form
        initialValues={{
          email: undefined,
          password: undefined,
          metal: [],
          timeframe: undefined,
          ['bronze-details']: '',
          ['bronze-min-lot']: '',
          ['bronze-max-lot']: '',
          ['contract-code']: undefined,
        }}
        validate={(values: { [x: string]: any }) => {
          let errors: { [x: string]: any } = {};

          if (!values.email) {
            errors.email = 'Email address is required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values['bronze-details'] || values['bronze-details'] === '') {
            console.log(
              !values['bronze-details'] || [values['bronze-details'] === ''],
            );
            errors['bronze-details'] = 'Bronze details are required';
          }

          return errors;
        }}
        onSubmit={(values, x) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <FormField
              name="email"
              label="Email address"
              hint="Please enter your email address."
            >
              <TextInput type="email" />
            </FormField>

            <FormField name="terms">
              <Checkbox label="I agree to the terms & conditions" />
            </FormField>

            <FormField name="chips" label="Choose values">
              <Stack>
                <Checkbox chip label="ValueOne" value="one" />
                <Checkbox chip label="ValueTwo" value="two" />
                <Checkbox chip label="ValueThree" value="three" />
              </Stack>
            </FormField>

            <FormField name="contract-code" label="Contract code">
              <Select
                placeholder="Please select"
                items={[
                  {
                    label: 'MX',
                    value: 'mx',
                  },
                  {
                    label: 'HU',
                    value: 'hu',
                  },
                  {
                    label: 'ME',
                    value: 'me',
                  },
                ]}
              />
            </FormField>

            <FormField name="start-date" label="Start date">
              <SingleDatePicker />
            </FormField>

            <FormField name="metal" label="Select your metals">
              <Checkbox label="Bronze" value="bronze" />
              {// @ts-ignore
              values.metal && values.metal.includes('bronze') && (
                <>
                  <FormField name="bronze-min-lot" label="Min lot">
                    <TextInput type="text" />
                  </FormField>
                  <FormField name="bronze-max-lot" label="Max lot">
                    <TextInput type="text" />
                  </FormField>
                </>
              )}
              <Checkbox label="Silver" value="silver" />
              <Checkbox label="Gold" value="gold" />
            </FormField>

            {
              // // @ts-ignore
              // values.metal && values.metal.includes('bronze') && (
              //   <FormField name="bronze-details" label="Bronze details">
              //     <TextInput type="text" />
              //   </FormField>
              // )
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
    </div>
  ))
  .add('currency', () => (
    <div
      style={{
        padding: '2rem',
        backgroundColor: 'hsla(var(--t-brand-primary-hsl), 0.03)',
      }}
    >
      <Form
        initialValues={{}}
        validate={(values) => {}}
        onSubmit={(values, x) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <SelectRepeater
              name="currencies"
              requiresPrimary
              initialValues={['GBP', 'USD']}
              values={[
                {
                  label: 'Great British Pound (£)',
                  value: 'GBP',
                },
                {
                  label: 'US Dollar ($)',
                  value: 'USD',
                },
                {
                  label: 'Euro (€)',
                  value: 'EUR',
                },
              ]}
              renderFields={({ value }) => (
                <FormField name={`currencies-${value}-tradable`} label="Tradeable">
                  <Radio label="Yes" value="true" />
                  <Radio label="No" value="false" />
                </FormField>
              )}
            />
            <Button>Submit</Button>
          </form>
        )}
      </Form>
    </div>
  ));
