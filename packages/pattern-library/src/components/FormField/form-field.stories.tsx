import React from 'react';
import { storiesOf } from '@storybook/react';
import FormField from './index';
import MultipleChoiceInput from './../MultipleChoiceInput';

storiesOf('Forms/Form Field', module)
  .add('basic', () => (
    <FormField
      name="email"
      label="Email address"
    >
      <input type="text" name="email" id="email" />
    </FormField>
  ))
  .add('with hint', () => (
    <FormField
      name="password"
      label="Password"
      hint="Must contain 8+ characters with at least 1 number and 1 uppercase letter."
    >
      <input type="password" name="password" id="password" />
    </FormField>
  ))
  .add('with error', () => (
    <FormField
      name="password"
      label="Password"
      hint="Must contain 8+ characters with at least 1 number and 1 uppercase letter."
      errors={['Must contain a number.', 'Must contain an uppercase letter.']}
    >
      <input type="password" name="password" id="password" value="mygreattestpass" />
    </FormField>
  ))
  .add('with multiple inputs', () => (
    <FormField
      name="metal"
      label="Select metal"
    >
      <MultipleChoiceInput
        type="checkbox"
        name="metal"
        value="bronze"
        label="Bronze"
      />
      <MultipleChoiceInput
        type="checkbox"
        name="metal"
        value="silver"
        label="Silver"
      />
    </FormField>
  ));

