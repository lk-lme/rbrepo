import React from 'react';
import { storiesOf } from '@storybook/react';
import SummaryList from '.';

storiesOf('SummaryList', module).add('basic', () => (
  <div
    style={{
      padding: '2rem',
    }}
  >
    <SummaryList
      items={[
        { id: 'bronze', name: 'Bronze' },
        { id: 'silver', name: 'Silver' },
        { id: 'gold', name: 'Gold' },
      ]}
      renderItem={({ name }) => name}
    />
  </div>
));
