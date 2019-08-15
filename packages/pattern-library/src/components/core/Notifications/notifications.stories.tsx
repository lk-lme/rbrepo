import React from 'react';
import faker from 'faker';
import { addReadme } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Notifications from '.';
import README from './README.md';

storiesOf('Core/Notifications', module)
  .addParameters({ readme: { sidebar: README } })
  .addDecorator(PaddingDecorator())
  .add('Populated', () => (
      <Notifications
        items={[
          {
            id: faker.random.uuid(),
            type: 'neutral',
            message: faker.lorem.lines(1),
          },
          {
            id: faker.random.uuid(),
            type: 'warning',
            message: faker.lorem.lines(1),
          },
          {
            id: faker.random.uuid(),
            type: 'danger',
            message: faker.lorem.lines(1),
          },
          {
            id: faker.random.uuid(),
            type: 'success',
            message: faker.lorem.lines(1),
          },
        ]}
      />
  ))
  .add('Empty', () => (
    <Notifications />
  ));
