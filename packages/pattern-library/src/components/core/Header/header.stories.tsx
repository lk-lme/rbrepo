import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Header from '.';
import README from './README.md';

storiesOf('Core/Navigation/Header', module)
  .addDecorator(withKnobs)
  .addParameters({ readme: { sidebar: README } })
  .add('Base', () => (
    <Header
      user={{
        id: '123',
        name: text('User name', 'Alexia Jones'),
        avatar:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=120&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      }}
      notifications={{
        hasUnread: boolean('Has unread notifications', true),
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
