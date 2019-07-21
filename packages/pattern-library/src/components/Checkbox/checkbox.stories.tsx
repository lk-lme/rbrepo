import React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '.';

storiesOf('Forms/Multiple Choice/Checkbox', module)
  .add('un-checked', () => (
    <Checkbox
      label="Accept terms"
    />
  ))
  .add('checked', () => (
    <Checkbox
      checked
      label="Accept terms"
    />
  ));
