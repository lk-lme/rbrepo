import React, { useState, useCallback, useRef } from 'react';
import { storiesOf } from '@storybook/react';
import keycode from 'keycode';
import Popover from '.';
import Button from 'Components/core/Button';
import useOnOutsideClick from 'Hooks/useOnOutsideClick';

function getFocusableElems(parent: HTMLElement): HTMLElement[] | null {
  return Array.from(
    parent.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]',
    ),
  );
}

function getNextArrItem<T>(
  direction: 'forward' | 'backward',
  allElems: T[],
  currentElem?: T | null,
) {
  const inc = direction === 'forward' ? 1 : -1;
  const defaultElem =
    direction === 'forward' ? allElems[0] : allElems[allElems.length - 1];

  return currentElem
    ? allElems[allElems.findIndex(elem => currentElem === elem) + inc] ||
        defaultElem
    : defaultElem;
}

const Dropdown = () => {
  const btnElRef = useRef<HTMLButtonElement>(null);
  const clickOutsideRef = useRef<HTMLDivElement>(null);
  const activeElems = useRef<HTMLElement[] | null>(null);
  const [active, setActive] = useState(false);

  useOnOutsideClick(clickOutsideRef, () => setActive(false));

  const wrapperRef = useCallback(node => {
    activeElems.current = node ? getFocusableElems(node) : null;

    if (!activeElems.current) return;

    activeElems.current[0].focus({ preventScroll: true });
  }, []);

  function handleClick(e: Event) {
    e.preventDefault();
    setActive(!active);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const { current: menuItems } = activeElems;

    if (!menuItems) return;

    const key = keycode(e.keyCode);

    switch (key) {
      case 'up':
      case 'down':
        {
          e.preventDefault();
          getNextArrItem(
            key === 'up' ? 'backward' : 'forward',
            menuItems,
            document.activeElement as HTMLElement,
          ).focus();
        }
        break;
      case 'esc':
      case 'tab': {
        e.preventDefault();
        setActive(false);
        if (!btnElRef.current) return;
        btnElRef.current.focus();
      }
      default:
        break;
    }
  }

  return (
    <div
      style={{
        padding: '2rem',
        minHeight: '60rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Button ref={btnElRef} onClick={handleClick}>
        Some text
      </Button>
      <Popover anchor={btnElRef} isActive={active}>
        <div ref={wrapperRef} onKeyDown={handleKeyDown}>
          <div
            ref={clickOutsideRef}
            style={{
              backgroundColor: 'whitesmoke',
              padding: '2rem',
              maxWidth: '40rem',
            }}
          >
            <ul>
              <li>
                <a href="#" tabIndex={-1}>
                  Menu one
                </a>
              </li>
              <li>
                <a href="#" tabIndex={-1}>
                  Menu two
                </a>
              </li>
              <li>
                <a href="#" tabIndex={-1}>
                  Menu three
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Popover>
      <p>
        This is some great test with a <a href="#">link</a>.
      </p>
    </div>
  );
};

storiesOf('Core/Popover', module).add('Dropdown', () => <Dropdown />);
