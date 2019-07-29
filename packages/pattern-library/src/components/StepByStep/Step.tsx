import React, { memo, useCallback } from 'react';
import Heading from './../Heading';
import Button from './../Button';
import styles from './step-by-step.scss';
import handleRenderProp, { RenderProp } from './../../utils/handleRenderProp';

const Step: React.FunctionComponent<Props> = (props) => {
  const { id, title, description, isOpen, setOpen } = props;

  const handleClick = useCallback(() => {
    setOpen(id, !isOpen);
  }, [id, setOpen, isOpen]);

  return (
    <>
      <Heading className={styles['step-by-step__title']}>
        <Button
          className={styles['step-by-step__toggle']}
          onClick={handleClick}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          {title}
        </Button>
      </Heading>
      {isOpen && handleRenderProp(description, props)}
    </>
  );
};

export interface Props {
  id: string;
  title: string;
  isOpen: boolean;
  setOpen(id: string, isOpen: boolean): void;
  description?: RenderProp;
}

export default memo(Step);
