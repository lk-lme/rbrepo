import React, { useRef, useState, useCallback } from 'react';
import Button from 'Components/core/Button';
import Popover from 'Components/core/Popover';
import ActionMenu, { Action } from 'Components/core/ActionMenu';
import handleRenderProp, { RenderProp } from 'Utils/handleRenderProp'

const DropdownMenu: React.FunctionComponent<Props> = (props) => {
  const { label, actions, classNames = {} } = props;
  const btnElRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(false);

  const handleClick = useCallback((e: Event) => {
    e.preventDefault();
    setActive(isActive => !isActive);
  }, []);

  return (
    <>
      <Button ref={btnElRef} onClick={handleClick} className={classNames.button}>
        {handleRenderProp(label, props)}
      </Button>
      <Popover anchor={btnElRef} isActive={active} placement="bottom-start">
        <ActionMenu setActive={setActive} actions={actions} />
      </Popover>
    </>
  );
};

interface Props {
  label: RenderProp;
  actions: Action[];
  classNames?: {
    button?: string;
  };
}

export default DropdownMenu;
