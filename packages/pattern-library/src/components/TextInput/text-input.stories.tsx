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
    <div style={{ padding: '2rem', backgroundColor: 'hsla(var(--t-brand-primary-hsl), 0.03)' }}>
      <ControlledTextInput />
    </div>
  ));
