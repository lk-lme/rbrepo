import React, { useRef, useEffect } from 'react';
import keycode from 'keycode';
import useOnOutsideClick from 'Hooks/useOnOutsideClick';
import getNextArrItem from 'Utils/getNextArrItem';
import getFocusableElems from 'Utils/getFocusableElems';
import handleRenderProp, { RenderProp } from 'Utils/handleRenderProp';
import Button from 'Components/core/Button';
import styles from './action-menu.scss';

const ActionMenu: React.FunctionComponent<ActionMenuProps> = ({
  setActive,
  actions,
}) => {
  // The top-level rendered DOM element.
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  // The focusable elements within `wrapperRef`.
  const activeElems = useRef<HTMLElement[] | null>(null);
  // The element that was focused before mount (so we can restore focus).
  const entryActiveRef = useRef<HTMLElement | null>();

  useOnOutsideClick(wrapperRef, () => setActive(false));

  /**
   * Save focus on mount and return it on unmount.
   */
  useEffect(() => {
    // Save the elem with focus before instantiation.
    entryActiveRef.current = document.activeElement as HTMLElement;
    return () => {
      if (!entryActiveRef.current) return;
      entryActiveRef.current.focus();
    };
  }, []);

  /**
   * Store an array of focusable elements on mount.
   */
  useEffect(() => {
    if (!wrapperRef.current) return;
    activeElems.current = getFocusableElems(wrapperRef.current);
  }, []);

  /**
   * Focus the first menu item on mount.
   */
  useEffect(() => {
    if (!activeElems.current) return;
    // preventScroll is used to avoid issues with Popper (infinite loop).
    activeElems.current[0].focus({ preventScroll: true });
  }, []);

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const menuItems = activeElems.current;

    if (!menuItems) return;

    const key = keycode(e.keyCode);

    switch (key) {
      // Advance up/down the menu list
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
      // Close the menu
      case 'esc':
      case 'tab': {
        e.preventDefault();
        setActive(false);
      }
      default:
        break;
    }
  }

  return (
    <div ref={wrapperRef} onKeyDown={handleKeyDown}>
      <ul className={styles.list}>
        {actions.map(props => {
          const { id, label, url, onClick } = props;
          return (
            <li key={id} className={styles['list__item']}>
              <Button
                url={url}
                onClick={onClick}
                tabIndex={-1}
                className={styles.item}
                variety='naked'
              >
                {handleRenderProp(label, props)}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export type Action = {
  id: string;
  label: RenderProp;
  url?: string;
  onClick?(e: Event): void;
};

interface ActionMenuProps {
  /** A callback to set the active state. */
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  /** A list of menu items. */
  actions: Action[];
}

export default ActionMenu;
