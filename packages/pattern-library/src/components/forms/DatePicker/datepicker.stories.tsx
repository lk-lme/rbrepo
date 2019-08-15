import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import { SingleDatePicker } from '.';
import README from './README.md';

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

storiesOf('Forms/Date Picker', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(PaddingDecorator({ withBG: true }))
  .add('Single input (controlled)', () => (
    <ControlledPicker />
  ));
