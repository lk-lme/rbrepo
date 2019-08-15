import React, { memo, useCallback } from 'react';
import Heading from 'Components/core/Heading';
import Button from 'Components/core/Button';
import styles from './accordion.scss';
import handleRenderProp, { RenderProp } from 'Utils/handleRenderProp';

const AccordionSection: React.FunctionComponent<Props> = (props) => {
  const { id, title, description, isOpen, setOpen } = props;

  const handleClick = useCallback(() => {
    setOpen(id, !isOpen);
  }, [id, setOpen, isOpen]);

  return (
    <>
      <Heading className={styles['accordion__title']}>
        <Button
          className={styles['accordion__toggle']}
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

export default memo(AccordionSection);
