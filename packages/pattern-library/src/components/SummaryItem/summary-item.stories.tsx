import React from 'react';
import { storiesOf } from '@storybook/react';
import SummaryItem from '.';

storiesOf('SummaryItem', module).add('basic', () => (
  <div
    style={{
      padding: '2rem',
      backgroundColor: 'hsla(var(--t-brand-primary-hsl), 0.03)',
    }}
  >
    <div style={{ marginTop: '2rem' }}>
      <SummaryItem
        title="AH Future"
        description="Aluminium alloy future"
        meta={[
          {
            title: 'Product code',
            definition: 'AH',
          },
          {
            title: 'Type',
            definition: 'Future',
          },
        ]}
        date={{
          dateTime: new Date(2019, 7, 7),
          renderLabel: dateStr => `Last modified ${dateStr}`,
          url: '#',
        }}
        badges={[
          {
            type: 'primary',
            title: 'New',
          },
        ]}
        actions={[
          {
            id: 'clone',
            label: 'Clone',
          },
          {
            id: 'Delete',
            label: 'Delete',
          },
        ]}
      />
    </div>
  </div>
));
