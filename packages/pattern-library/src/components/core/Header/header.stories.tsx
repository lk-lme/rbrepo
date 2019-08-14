import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import Header from '.';

storiesOf('Core/Header', module).add('default', () => (
  <Header
    user={{
      id: '123',
      name: 'Alexi Jones',
      avatar:
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=120&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    }}
    notifications={{
      hasUnread: true,
      items: [
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
      ],
    }}
  />
));
