import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
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
  .addDecorator(PaddingDecorator({ withBG: true }))
  .add('Base', () => (
    <Select items={items} />
  ));
