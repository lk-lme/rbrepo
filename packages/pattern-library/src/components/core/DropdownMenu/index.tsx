import React, { useRef, useState, useCallback } from 'react';
import Button from 'Components/core/Button';
import Popover from 'Components/core/Popover';
import ActionMenu, { Action } from 'Components/core/ActionMenu';

const DropdownMenu: React.FunctionComponent<Props> = ({ label, actions, classNames = {} }) => {
  const btnElRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(false);

  const handleClick = useCallback((e: Event) => {
    e.preventDefault();
    setActive(isActive => !isActive);
  }, []);

  return (
    <>
      <Button ref={btnElRef} onClick={handleClick} className={classNames.button}>
        {label}
      </Button>
      <Popover anchor={btnElRef} isActive={active} placement="bottom-start">
        <ActionMenu setActive={setActive} actions={actions} />
      </Popover>
    </>
  );
};

interface Props {
  label: string;
  actions: Action[];
  classNames?: {
    button?: string;
  };
}

export default DropdownMenu;
