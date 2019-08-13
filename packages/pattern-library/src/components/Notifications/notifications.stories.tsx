import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import Notifications from '.';

storiesOf('Notifications', module)
  .add('basic', () => (
    <div style={{ padding: '2rem' }}>
      <Notifications
        items={[
          {
            id: faker.random.uuid(),
            type: 'success',
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
    </div>
  ));
