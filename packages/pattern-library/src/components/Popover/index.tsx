import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Popper from 'popper.js';
import styles from './popover.scss';
import usePortal from './../../hooks/usePortal';

const Popover: React.FunctionComponent<Props> = ({ anchor, children }) => {
  const popperInst = useRef<Popper | null>(null);
  const popperEl = useRef(null);
  const target = usePortal('popover');
  const [popperPosition, setPopperPosition] = useState();

  useEffect(() => {
    if (anchor && popperEl) {
      // @ts-ignore
      popperInst.current = new Popper(anchor.current, popperEl.current, {
        onCreate(e: any) {
          console.log('We have created', e);
          //@ts-ignore
          setPopperPosition(e.styles);
        },
        onUpdate(e: any) {
          console.log('We have updated', e);
          //@ts-ignore
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
  }, [anchor]);

  const Elem = (
    <div className={styles.popover} ref={popperEl} style={popperPosition}>
      {children}
    </div>
  );

  return createPortal(Elem, target);
};

interface Props {
  anchor?: HTMLElement | React.MutableRefObject<HTMLElement | undefined>;
}

export default Popover;
