import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from '.';
import Stack from 'Components/core/Stack';

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
  ))
  .add('chip un-checked', () => (
    <Checkbox
      chip
      label="Accept terms"
    />
  ))
  .add('chip checked', () => (
    <Checkbox
      chip
      checked
      label="Accept terms"
    />
  ))
  .add('stacked chips', () => (
    <Stack>
      <Checkbox
        chip
        label="Accept terms"
      />
      <Checkbox
        chip
        checked
        label="Accept terms"
      />
      <Checkbox
        chip
        label="Accept terms"
      />
    </Stack>
  ));

