import React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from '.';

storiesOf('Core/Nav', module)
  .add('Base', () => (
    <Nav
      activeID="navtwo"
      links={[
        {
          id: 'contracts',
          url: '#',
          title: 'Contracts',
        },
        {
          id: 'navtwo',
          url: '#',
          title: 'Nav item two',
        },
        {
          id: 'navthree',
          url: '#',
          title: 'Nav item three',
        },
      ]}
    />
  ));
