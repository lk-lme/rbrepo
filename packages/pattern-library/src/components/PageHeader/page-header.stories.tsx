import React from 'react';
import { storiesOf } from '@storybook/react';
import PageHeader from '.';

storiesOf('PageHeader', module)
  .add('basic', () => (
    <div style={{ padding: '2rem' }}>
      <PageHeader
        title="Contract: AH Future"
      />
    </div>
  ))
  .add('with action', () => (
    <div style={{ padding: '2rem' }}>
      <PageHeader
        title="Contract: AH Future"
        actions={[ { title: 'Clone' } ]}
      />
    </div>
  ))
  .add('with badge', () => (
    <div style={{ padding: '2rem' }}>
      <PageHeader
        title="Contract: AH Future"
        badges={[{ title: 'In review', type: 'warning' }]}
      />
    </div>
  ))
  .add('with badge and actions', () => (
    <div style={{ padding: '2rem' }}>
      <PageHeader
        title="Contract: AH Future"
        badges={[{ title: 'Draft', type: 'primary' }]}
        actions={[
          {
            title: 'Export all',
            variety: 'naked',
          },
          {
            title: 'Clone',
          },
          {
            title: 'Delete',
          },
        ]}
      />
    </div>
  ))
  .add('stress test', () => (
    <div style={{ padding: '2rem' }}>
      <PageHeader
        title="Contract: AH Future Contract AH Future"
        badges={[
          { title: 'Draft', type: 'primary' },
          { title: 'Secondary', type: 'warning' },
          { title: 'Review', type: 'success' },
        ]}
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
