import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Popper from 'popper.js';
import styles from './popover.scss';
import usePortal from '../../hooks/usePortal';

const Popover: React.FunctionComponent<Props> = ({ anchor, isActive, children }) => {
  const target = usePortal('popover');
  const popperInst = useRef<Popper|null>(null);
  const popperElRef = useRef<HTMLDivElement>(null);
  const [popperPosition, setPopperPosition] = useState();

  useEffect(() => {
    const { current: popperEl } = popperElRef;
    const anchorEl =
      anchor && (anchor instanceof Element ? anchor : anchor.current);

    if (anchorEl && popperEl) {
      popperInst.current = new Popper(anchorEl, popperEl, {
        onCreate(e) {
          setPopperPosition(e.styles);
        },
        onUpdate(e) {
          setPopperPosition(e.styles);
        },
        modifiers: {
          applyStyle: { enabled: false },
        },
      });
    }

    return () => {
      if (popperInst.current) {
        popperInst.current.destroy();
      }
    };
  }, [anchor, isActive]);

  if (!isActive) return null;

  const Elem = (
    <div className={styles.popover} ref={popperElRef} style={popperPosition}>
      {children}
    </div>
  );

  return createPortal(Elem, target);
};

interface Props {
  /** The element to position the Popover in relation to. */
  anchor?: HTMLElement | React.MutableRefObject<HTMLElement | null>;
  /** If the popover should be displayed. */
  isActive?: boolean;
}

export default Popover;
