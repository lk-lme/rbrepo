import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Accordion from '../index';

const steps = [
  {
    id: 'stepOne',
    title: 'Step One',
    description: 'Description One',
  },
  {
    id: 'stepTwo',
    title: 'Step Two',
    description: 'Description Two',
  },
  {
    id: 'stepThree',
    title: 'Step Three',
    description: 'Description Three',
  },
];

describe('<StepByStep />', () => {
  it('toggles description when clicked', () => {
    const { title, description } = steps[0];
    const { queryByText } = render(
      <Accordion steps={steps} />,
    );

    // Should be hidden initially
    expect(queryByText(description)).toBeNull();

    fireEvent.click(queryByText(title) as HTMLElement);

    // Should be visible after click
    expect(queryByText(description)).not.toBeNull();

    fireEvent.click(queryByText(title) as HTMLElement);

    // Should be hidden again after a second click
    expect(queryByText(description)).toBeNull();
  });

  it('closes other panels when one opens', () => {
    const { title, description } = steps[0];
    const { title: titleTwo } = steps[1];
    const { queryByText } = render(
      <Accordion steps={steps} />,
    );

    fireEvent.click(queryByText(title) as HTMLElement);
    expect(queryByText(description) as HTMLElement).not.toBeNull();

    fireEvent.click(queryByText(titleTwo) as HTMLElement);
    expect(queryByText(description)).toBeNull();
  });

  it('handles allowMultiple option', () => {
    const { title, description } = steps[0];
    const { title: titleTwo } = steps[1];
    const { queryByText } = render(
      <Accordion allowMultiple steps={steps} />,
    );

    fireEvent.click(queryByText(title) as HTMLElement);
    expect(queryByText(description) as HTMLElement).not.toBeNull();

    fireEvent.click(queryByText(titleTwo) as HTMLElement);
    expect(queryByText(description) as HTMLElement).not.toBeNull();
  });

  it('handles defaultOpen option', () => {
    const visibleSteps = [steps[1].id, steps[2].id];
    const hiddenSteps = steps
      .filter(({ id }) => !visibleSteps.includes(id))
      .map(({ id }) => id);

    const { queryByText } = render(
      <Accordion defaultOpen={visibleSteps} steps={steps} />,
    );

    expect(queryByText(steps[0].description)).toBeNull();

    hiddenSteps.forEach(step => {
      const currentStep = steps.find(({ id }) => id === step);

      if (currentStep) {
        expect(queryByText(currentStep.description) as HTMLElement).toBeNull();
      }
    });

    visibleSteps.forEach(step => {
      const currentStep = steps.find(({ id }) => id === step);

      if (currentStep) {
        expect(queryByText(currentStep.description) as HTMLElement).not.toBeNull();
      }
    });
  });
});
