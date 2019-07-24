import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import Popover from '.';
import Button from './../Button';

const Dropdown = () => {
  const btnElRef = useRef<HTMLButtonElement>();

  return (
    <div style={{ padding: '2rem', minHeight: '60rem', display: 'flex', alignItems: 'center' }}>
      <Button ref={btnElRef} onClick={() => console.log(btnElRef)}>
        Some text
      </Button>
      <Popover anchor={btnElRef}>
        <div style={{ backgroundColor: 'whitesmoke', padding: '2rem', maxWidth: '40rem' }}>
          <h4>Menu</h4>
          <ul>
            <li>Menu one</li>
            <li>Menu two</li>
            <li>Menu three</li>
          </ul>
        </div>
      </Popover>
    </div>
  );
};

storiesOf('Popover', module)
  .add('Dropdown', () => (
    <Dropdown />
  ));



