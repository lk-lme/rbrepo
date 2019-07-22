import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import RadioSet from '.';
import Radio from './../Radio';

const ControlledRadioSet: React.FunctionComponent = () => {
  const [ value, setValue ] = useState('');

  return (
    <RadioSet value={value} setFieldValue={setValue}>
      <Radio label="Bronze" value="bronze" />
      <Radio label="Silver" value="silver" />
      <Radio label="Gold" value="gold" />
    </RadioSet>
  );
};

storiesOf('Forms/Multiple Choice/Radio Set', module)
  .add('basic', () => (
    <RadioSet value="silver">
      <Radio label="Bronze" value="bronze" />
      <Radio label="Silver" value="silver" />
      <Radio label="Gold" value="gold" />
    </RadioSet>
  ))
  .add('controlled', () => (
    <ControlledRadioSet />
  ));
