import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Steps from '.';

storiesOf('Core/Steps', module)
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <div style={{ maxWidth: '20em' }}>
      <Steps
        activeID="contractdeets"
        steps={[
          {
            id: 'starthere',
            title: 'Start here Start here Start here Start here Start here',
            link: '#',
            status: 'success',
          },
          {
            id: 'contractdeets',
            title: 'Contract',
            link: '#',
          },
          {
            id: 'calendar',
            title: 'Calendar',
            link: '#',
          },
          {
            id: 'tick',
            title: 'Tick size',
            link: '#',
          },
          {
            id: 'price',
            title: 'Price',
            link: '#',
          },
          {
            id: 'ringtrader',
            title: 'Ring trader',
            link: '#',
          },
          {
            id: 'approval',
            title: 'Approval',
            link: '#',
          },
        ]}
      />
    </div>
  ));
