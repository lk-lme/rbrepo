import React from 'react';
import Button from 'Components/core/Button';
import Step, { Props as StepProps } from './Step';
import useAccordion, { Options as AccordionOptions } from 'Hooks/useAccordion';
import styles from './step-by-step.scss';

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
      <ol>
        {steps.map(({ id, title, description }) => (
          <li className={styles['step-by-step__item']} key={id}>
            <Step
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
  steps: Pick<StepProps, 'id' | 'title' | 'description'>[];
}

export default StepByStep;
