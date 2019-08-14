import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import PageHeader from '.';
import Link from 'Components/core/Link';

storiesOf('Core/PageHeader', module)
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <PageHeader
      title="Contract: AH Future"
    />
  ))
  .add('With info text', () => (
    <PageHeader
      title="Contract: AH Future"
      infoText={(
        <Link>View history</Link>
      )}
    />
  ))
  .add('With action', () => (
    <PageHeader
      title="Contract: AH Future"
      actions={[ { title: 'Clone' } ]}
    />
  ))
  .add('With badge', () => (
    <PageHeader
      title="Contract: AH Future"
      badges={[{ title: 'In review', type: 'warning' }]}
    />
  ))
  .add('With badge, actions and info', () => (
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
      infoText={(
        <Link>View history</Link>
      )}
    />
  ))
  .add('Stress test', () => (
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
  ));
