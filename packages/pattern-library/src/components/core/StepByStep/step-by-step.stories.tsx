import React from 'react';
import faker from 'faker';
import Case from 'case';
import { storiesOf } from '@storybook/react';
import StepByStep from '.';

const steps = [
  {
    id: String(faker.random.uuid()),
    title: Case.capital(faker.lorem.words(3)),
    description: faker.lorem.paragraph(),
  },
  {
    id: String(faker.random.uuid()),
    title: Case.capital(faker.lorem.words(2)),
    description: faker.lorem.paragraph(),
  },
  {
    id: String(faker.random.uuid()),
    title: Case.capital(faker.lorem.words(3)),
    description: (
      <ul>
        <li>
          {faker.lorem.paragraph()}
        </li>
        <li>
          {faker.lorem.paragraph()}
        </li>
        <li>
          {faker.lorem.paragraph()}
        </li>
      </ul>
    ),
  },
];

storiesOf('Core/Step by Step', module)
  .add('Single open step', () => (
    <div style={{ padding: '2rem' }}>
      <StepByStep
        steps={steps}
      />
    </div>
  ))
  .add('Multiple open steps', () => (
    <div style={{ padding: '2rem' }}>
      <StepByStep
        allowMultiple
        steps={steps}
      />
    </div>
  ))
  .add('Steps open by default', () => (
    <div style={{ padding: '2rem' }}>
      <StepByStep
        allowMultiple
        defaultOpen={[steps[0].id, steps[steps.length - 1].id]}
        steps={steps}
      />
    </div>
  ));

