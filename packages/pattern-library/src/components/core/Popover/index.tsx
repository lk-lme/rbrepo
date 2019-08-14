import React, { useState, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import Popper, { PopperOptions } from 'popper.js';
import styles from './popover.scss';
import usePortal from 'Hooks/usePortal';

const Popover: React.FunctionComponent<Props> = ({
  anchor,
  isActive,
  placement,
  children,
}) => {
  const target = usePortal('popover');
  const popperInst = useRef<Popper | null>(null);
  const popperElRef = useRef<HTMLDivElement>(null);
  const [popperPosition, setPopperPosition] = useState();

  useLayoutEffect(() => {
    const { current: popperEl } = popperElRef;
    const anchorEl =
      anchor && (anchor instanceof Element ? anchor : anchor.current);

    if (anchorEl && popperEl) {
      popperInst.current = new Popper(anchorEl, popperEl, {
        placement,
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

  const elem = (
    <div className={styles.popover} ref={popperElRef} style={popperPosition}>
      {children}
    </div>
  );

  return createPortal(isActive ? elem : null, target);
};

Popover.defaultProps = {
  isActive: false,
  placement: 'auto',
};

interface Props {
  /** The element to position the Popover in relation to. */
  anchor?: HTMLElement | React.MutableRefObject<HTMLElement | null>;
  /** If the popover should be displayed. */
  isActive?: boolean;
  placement?: PopperOptions['placement'];
}

export default Popover;
