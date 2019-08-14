import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import PageHeader from '.';
import Link from 'Components/core/Link';

storiesOf('Core/Navigation/Page Header', module)
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .add('Base', () => (
    <PageHeader
      title={text('Title', 'Contract: AH Future')}
    />
  ))
  .add('With info text', () => (
    <PageHeader
      title={text('Title', 'Contract: AH Future')}
      infoText={(
        <Link>{text('Info text', 'View history')}</Link>
      )}
    />
  ))
  .add('With action', () => (
    <PageHeader
      title={text('Title', 'Contract: AH Future')}
      actions={[ { title: text('Action label', 'Clone') } ]}
    />
  ))
  .add('With badge', () => (
    <PageHeader
      title={text('Title', 'Contract: AH Future')}
      badges={[{ title: text('Badge label', 'In review'), type: 'warning' }]}
    />
  ))
  .add('With badge, actions and info', () => (
    <PageHeader
      title={text('Title', 'Contract: AH Future')}
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
      title={text('Title', 'Contract: AH Future Contract AH Future')}
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
