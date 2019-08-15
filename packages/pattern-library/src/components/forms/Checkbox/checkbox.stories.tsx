import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import { Checkbox } from '.';
import Stack from 'Components/layout/Stack';
import README from './README.md';

storiesOf('Forms/Multiple Choice/Checkbox', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <Checkbox
      checked={boolean('Checked', false)}
      label={text('Label', 'Accept terms')}
      onChange={action('Fired onChange')}
    />
  ))
  .add('Chip', () => (
    <Checkbox
      chip
      checked={boolean('Checked', false)}
      label={text('Label', 'Accept terms')}
      onChange={action('Fired onChange')}
    />
  ))
  .add('Stacked chips', () => (
    <Stack>
      <Checkbox
        chip
        label="Bronze"
        onChange={action('Fired onChange')}
      />
      <Checkbox
        chip
        checked
        label="Silver"
        onChange={action('Fired onChange')}
      />
      <Checkbox
        chip
        label="Gold"
        onChange={action('Fired onChange')}
      />
    </Stack>
  ));

