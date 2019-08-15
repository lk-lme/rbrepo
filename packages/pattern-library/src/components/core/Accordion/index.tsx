import React from 'react';
import Button from 'Components/core/Button';
import AccordionSection, { Props as AccordionSectionProps } from './AccordionSection';
import useAccordion, { Options as AccordionOptions } from 'Hooks/useAccordion';
import styles from './accordion.scss';

const StepByStep: React.FunctionComponent<Props> = ({
  steps,
  defaultOpen,
  allowMultiple,
}) => {
  const { allOpen, isOpen, setOpen, toggleAll } = useAccordion({
    ids: steps.map(({ id }) => id),
    defaultOpen,
    allowMultiple,
  });

  return (
    <>
      <Button onClick={toggleAll}>{allOpen ? 'Close All' : 'Show all'}</Button>
      <ol className={styles['accordion__list']}>
        {steps.map(({ id, title, description }) => (
          <li className={styles['accordion__item']} key={id}>
            <AccordionSection
              id={id}
              title={title}
              isOpen={isOpen(id)}
              setOpen={setOpen}
              description={description}
            />
          </li>
        ))}
      </ol>
    </>
  );
};

StepByStep.defaultProps = {
  allowMultiple: false,
};

interface Props {
  allowMultiple?: AccordionOptions['allowMultiple'];
  defaultOpen?: AccordionOptions['defaultOpen'];
  steps: Pick<AccordionSectionProps, 'id' | 'title' | 'description'>[];
}

export default StepByStep;
