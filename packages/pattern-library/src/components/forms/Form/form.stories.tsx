import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import FormField from 'Components/forms/FormField';
import NestedSet from 'Components/forms/NestedSet';
import Form from 'Components/forms/Form';
import TextInput from 'Components/forms/TextInput';
import Radio from 'Components/forms/Radio';
import Checkbox from 'Components/forms/Checkbox';
import Select from 'Components/forms/Select';
import FormActions from 'Components/forms/FormActions';
import { SingleDatePicker } from 'Components/forms/DatePicker';
import Button from 'Components/core/Button';
import Stack from 'Components/layout/Stack';

storiesOf('Forms/Form', module)
  .addDecorator(PaddingDecorator({ withBG: true }))
  .add('Kitchen sink', () => (
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
      onSubmit={action('Form submitted')}
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
              <NestedSet>
                <FormField name="bronze-min-lot" label="Min lot">
                  <TextInput type="text" />
                </FormField>
                <FormField name="bronze-max-lot" label="Max lot">
                  <TextInput type="text" />
                </FormField>
              </NestedSet>
            )}
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

          <FormActions>
            <Button type="submit">Submit</Button>
          </FormActions>
        </form>
      )}
    </Form>
  ));
