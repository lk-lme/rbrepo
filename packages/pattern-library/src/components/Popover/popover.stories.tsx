import React, { useState, useEffect, useCallback, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import Popover from '.';
import Button from './../Button';
import useOnOutsideClick from '../../hooks/useOnOutsideClick';

function getFocusableElems(parent: HTMLElement): HTMLElement[]|null {
  return Array.from(parent.querySelectorAll(
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
  ));
}

// @ts-ignore
// const FocusOnMount: React.FunctionComponent = ({ children }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (ref.current) {
//       const el = getFocusableElems(ref.current);
//       // console.log('fired useEffect', ref.current, el);
//       if (el) el[0].focus({ preventScroll: true });
//     }
//   }, []);

//   return <div ref={ref}>{children}</div>;
// };

const Dropdown = () => {
  const btnElRef = useRef<HTMLButtonElement>(null);
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  const activeElems = useRef<HTMLElement[]|null>(null);
  const [active, setActive] = useState(false);

  useOnOutsideClick(clickOutsideRef, () => setActive(false));

  const wrapperRef = useCallback((node) => {
    if (!node) return;

    activeElems.current = getFocusableElems(node);

    if (activeElems.current) activeElems.current[0].focus({ preventScroll: true });
  }, []);

  function handleClick(e: Event) {
    e.preventDefault();
    setActive(!active);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (!activeElems.current) return;

    const { current: menuItems } = activeElems;
    const firstItem = menuItems[0];
    const lastItem = menuItems[menuItems.length - 1];
    
    console.log(e.keyCode);

    if (e.keyCode === 40) {
      e.preventDefault();
      const next = menuItems[menuItems.findIndex(elem => document.activeElement === elem) + 1] || firstItem;
      next.focus();
    } else if (e.keyCode === 38) {
      e.preventDefault();
      const next = menuItems[menuItems.findIndex(elem => document.activeElement === elem) - 1] || lastItem;
      next.focus();
    } else if (e.keyCode === 27 || e.keyCode === 9) {
      e.preventDefault();
      setActive(false);
      if (!btnElRef.current) return;
      btnElRef.current.focus();
    }
  }

  return (
    <div style={{ padding: '2rem', minHeight: '60rem', display: 'flex', alignItems: 'center' }}>
      <Button ref={btnElRef} onClick={handleClick}>
        Some text
      </Button>
      <Popover anchor={btnElRef} isActive={active}>
        {/* <FocusOnMount>
          <div ref={clickOutsideRef} style={{ backgroundColor: 'whitesmoke', padding: '2rem', maxWidth: '40rem' }}>
            <ul>
              <li><a href="#">Menu one</a></li>
              <li><a href="#">Menu two</a></li>
              <li><a href="#">Menu three</a></li>
            </ul>
          </div>
        </FocusOnMount> */}
        <div ref={wrapperRef} onKeyDown={handleKeyDown}>
          <div ref={clickOutsideRef} style={{ backgroundColor: 'whitesmoke', padding: '2rem', maxWidth: '40rem' }}>
            <ul>
              <li><a href="#" tabIndex={-1}>Menu one</a></li>
              <li><a href="#" tabIndex={-1}>Menu two</a></li>
              <li><a href="#" tabIndex={-1}>Menu three</a></li>
            </ul>
          </div>
        </div>
      </Popover>
      <p>This is some great test with a <a href="#">link</a>.</p>
    </div>
  );
};

storiesOf('Popover', module)
  .add('Dropdown', () => (
    <Dropdown />
  ));



