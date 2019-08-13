import React, { useRef, useState, useCallback } from 'react';
import cx from 'classnames';
import Button from '../../Button/index';
import Popover from '../../Popover/index';
import handleRenderProp, { RenderProp } from '../../../utils/handleRenderProp/index';
import useOnOutsideClick from '../../../hooks/useOnOutsideClick/index';
import styles from './header-dropdown.scss';

const HeaderDropdown: React.FunctionComponent<Props> = (props) => {
  const { label, children, classNames = {} } = props;
  const btnElRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useOnOutsideClick(popoverRef, () => setActive(false));

  const handleClick = useCallback((e: Event) => {
    e.preventDefault();
    setActive(isActive => !isActive);
  }, []);

  return (
    <>
      <Button
        ref={btnElRef}
        onClick={handleClick}
        className={cx(styles.toggle, active && styles['toggle--is-active'])}
      >
        {handleRenderProp(label, props)}
      </Button>
      <Popover anchor={btnElRef} isActive={active} placement="bottom-end">
        <div ref={popoverRef} className={styles.dropdown}>
          {children}
        </div>
      </Popover>
    </>
  );
};

interface Props {
  label: RenderProp;
  classNames?: {
    button?: string;
  };
}

export default HeaderDropdown;
