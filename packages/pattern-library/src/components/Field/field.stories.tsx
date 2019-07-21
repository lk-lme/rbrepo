import React from 'react';
import { storiesOf } from '@storybook/react';
import Field from './index';
import MultipleChoiceInput from '../MultipleChoiceInput/index';

storiesOf('Forms/Field', module)
  .add('basic', () => (
    <Field
      name="email"
      label="Email address"
    >
      <input type="text" name="email" id="email" />
    </Field>
  ))
  .add('with hint', () => (
    <Field
      name="password"
      label="Password"
      hint="Must contain 8+ characters with at least 1 number and 1 uppercase letter."
    >
      <input type="password" name="password" id="password" />
    </Field>
  ))
  .add('with error', () => (
    <Field
      name="password"
      label="Password"
      hint="Must contain 8+ characters with at least 1 number and 1 uppercase letter."
      errors={['Must contain a number.', 'Must contain an uppercase letter.']}
    >
      <input type="password" name="password" id="password" value="mygreattestpass" />
    </Field>
  ))
  .add('with multiple inputs', () => (
    <Field
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
    </Field>
  ));

