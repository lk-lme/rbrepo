import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import CheckboxSet from '.';
import Checkbox from './../Checkbox';

const ControlledCheckboxSet: React.FunctionComponent = () => {
  const [ value, setValue ] = useState([]);

  return (
    <CheckboxSet value={value} setFieldValue={setValue}>
      <Checkbox label="Bronze" value="bronze" />
      <Checkbox label="Silver" value="silver" />
      <Checkbox label="Gold" value="gold" />
    </CheckboxSet>
  );
};

storiesOf('Forms/Multiple Choice/Checkbox Set', module)
  .add('basic', () => (
    <CheckboxSet value={['bronze']}>
      <Checkbox label="Bronze" value="bronze" />
      <Checkbox label="Silver" value="silver" />
      <Checkbox label="Gold" value="gold" />
    </CheckboxSet>
  ))
  .add('controlled', () => (
    <ControlledCheckboxSet />
  ));
