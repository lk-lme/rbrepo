import React from 'react';
import faker from 'faker';
import Case from 'case';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import DefinitionList from '.';

const items = [
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
    title: Case.capital(faker.lorem.words(4)),
    description: faker.lorem.paragraph(),
  },
];

storiesOf('Core/Definition List', module)
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <DefinitionList
      items={items}
    />
  ));
