import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import MultipleChoiceInput from 'Components/forms/MultipleChoiceInput';
import { TextInput } from 'Components/forms/TextInput';
import Field from '.';
import README from './README.md';

storiesOf('Forms/Field', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(PaddingDecorator({ withBG: true }))
  .add('With hint', () => (
    <Field
      name="password"
      label="Password"
      hint="Must contain 8+ characters with at least 1 number and 1 uppercase letter."
    >
      <TextInput type="password" />
    </Field>
  ))
  .add('With error', () => (
    <Field
      name="password"
      label="Password"
      hint="Must contain 8+ characters with at least 1 number and 1 uppercase letter."
      errors={['Must contain a number.', 'Must contain an uppercase letter.']}
    >
      <TextInput type="password" />
    </Field>
  ))
  .add('With multiple inputs', () => (
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

