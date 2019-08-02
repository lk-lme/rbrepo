import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeader from '.';

storiesOf('PageHeader', module)
  .add('basic', () => (
    <div style={{ padding: '2rem' }}>
      <PageHeader
        title="Contract: AH Future"
        badges={[{ title: 'Draft', type: 'primary' }]}
        actions={[
          {
            title: 'Clone',
          },
          {
            title: 'Export',
          },
          {
            title: 'Delete',
          },
        ]}
      />
    </div>
  ));
