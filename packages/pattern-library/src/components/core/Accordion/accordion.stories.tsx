import React from 'react';
import faker from 'faker';
import Case from 'case';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Accordion from '.';
import README from './README.md';

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

storiesOf('Core/Accordion', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(PaddingDecorator())
  .add('Single open section', () => (
    <Accordion
      steps={steps}
    />
  ))
  .add('Multiple open sections', () => (
    <Accordion
      allowMultiple
      steps={steps}
    />
  ))
  .add('Sections 1 and 3 open by default', () => (
    <Accordion
      allowMultiple
      defaultOpen={[steps[0].id, steps[steps.length - 1].id]}
      steps={steps}
    />
  ));

