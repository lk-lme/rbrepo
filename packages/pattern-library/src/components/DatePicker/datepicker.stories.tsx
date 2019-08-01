import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { SingleDatePicker } from '.';

const ControlledPicker = () => {
  const [val, setVal] = useState();
  const [focused, setFocused] = useState();

  return (
    <SingleDatePicker
      date={val} // momentPropTypes.momentObj or null
      // @ts-ignore
      onDateChange={setVal} // PropTypes.func.isRequired
      focused={focused} // PropTypes.bool
      // @ts-ignore
      onFocusChange={({ focused }: { focused: boolean }) => setFocused(focused)} // PropTypes.func.isRequired
      id="your_unique_id" // PropTypes.string.isRequired,
    />
  );
};

storiesOf('Forms/DatePicker', module)
  .add('single input', () => (
    <ControlledPicker />
  ));
