import React from 'react';
import { storiesOf } from '@storybook/react';
import MultipleChoiceInput from './index';

storiesOf('Forms/Multiple Choice/Checkbox', module)
  .add('un-checked', () => (
    <MultipleChoiceInput
      type="checkbox"
      label="Accept terms"
    />
  ))
  .add('checked', () => (
    <MultipleChoiceInput
      checked
      type="checkbox"
      label="Accept terms"
    />
  ));
