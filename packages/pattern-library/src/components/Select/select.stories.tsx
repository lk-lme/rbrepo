import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from '.';

const items = [
  {
    value: 'bronze',
    label: 'Bronze',
  },
  {
    value: 'silver',
    label: 'Silver',
  },
  {
    value: 'gold',
    label: 'Gold',
  },
  {
    value: 'iron',
    label: 'Iron',
  },
];

storiesOf('Forms/Select', module)
  .add('basic', () => (
    <div style={{ padding: '2rem', backgroundColor: 'hsla(var(--t-brand-primary-hsl), 0.03)' }}>
      <Select items={items} />
    </div>
  ));
