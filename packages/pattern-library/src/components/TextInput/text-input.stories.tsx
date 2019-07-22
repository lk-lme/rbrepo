import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from '.';

const ControlledTextInput = () => {
  const [val, setVal] = useState('');

  return (
    <TextInput
      value={val}
      onChange={(e) => {
        const target = e.target as HTMLInputElement;
        setVal(target.value);
      }}
    />
  );
};

storiesOf('Forms/Text Input', module)
  .add('basic', () => (
    <ControlledTextInput />
  ));
