import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import TextArea from '.';
import PaddingDecorator from 'Decorators/PaddingDecorator';

const ControlledTextArea = () => {
  const [val, setVal] = useState('');

  return (
    <TextArea
      value={val}
      onChange={(e) => {
        const target = e.target as HTMLInputElement;
        setVal(target.value);
      }}
    />
  );
};

storiesOf('Forms/Text Area', module)
  .addDecorator(PaddingDecorator({ withBG: true }))
  .add('basic', () => (
    <ControlledTextArea />
  ));
