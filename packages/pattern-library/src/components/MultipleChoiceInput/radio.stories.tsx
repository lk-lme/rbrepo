import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MultipleChoiceInput from './index';

const options = [
  {
    label: 'Bronze',
    value: 'bronze',
  },
  {
    label: 'Silver',
    value: 'silver',
  },
  {
    label: 'Gold',
    value: 'gold',
  },
];

storiesOf('Forms/Multiple Choice/Radio', module)
  .add('group', () => (
    <>
      {options.map(({ label, value }) => (
        <div key={value}>
          <MultipleChoiceInput
            checked
            name="metal"
            type="radio"
            label={label}
            value={value}
            onChange={action('onChange fired')}
          />
        </div>
      ))}
    </>
  ));
