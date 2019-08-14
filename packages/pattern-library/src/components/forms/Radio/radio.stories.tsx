import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '.';

storiesOf('Forms/Multiple Choice/Radio', module)
  .add('un-checked', () => (
    <Radio
      label="Bronze"
      value="bronze"
    />
  ))
  .add('checked', () => (
    <Radio
      checked
      label="Bronze"
      value="bronze"
    />
  ));

