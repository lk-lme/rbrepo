import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
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
  .addDecorator(PaddingDecorator({ withBG: true }))
  .add('Base', () => (
    <ControlledTextInput />
  ));
