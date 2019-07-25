import React, { useState, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import Popover from '.';
import Button from './../Button';
import useOnOutsideClick from '../../hooks/useOnOutsideClick';

const Dropdown = () => {
  const btnElRef = useRef(null);
  const clickOutsideRef = useRef(null);
  const [active, setActive] = useState(false);

  useOnOutsideClick(clickOutsideRef, () => setActive(false));

  return (
    <div style={{ padding: '2rem', minHeight: '60rem', display: 'flex', alignItems: 'center' }}>
      <Button ref={btnElRef} onClick={() => setActive(!active)}>
        Some text
      </Button>
      <Popover anchor={btnElRef} isActive={active} >
        <div ref={clickOutsideRef} style={{ backgroundColor: 'whitesmoke', padding: '2rem', maxWidth: '40rem' }}>
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



