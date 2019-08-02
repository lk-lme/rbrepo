import React from 'react';
import { storiesOf } from '@storybook/react';
import Badge from '.';

storiesOf('Badge', module)
  .add('default', () => (
    <div style={{ padding: '2rem' }}>
      <Badge>Draft</Badge>
    </div>
  ))
  .add('warning', () => (
    <div style={{ padding: '2rem' }}>
      <Badge type="warning">Submitted</Badge>
    </div>
  ))
  .add('danger', () => (
    <div style={{ padding: '2rem' }}>
      <Badge type="danger">Rejected</Badge>
    </div>
  ))
  .add('success', () => (
    <div style={{ padding: '2rem' }}>
      <Badge type="success">Approved</Badge>
    </div>
  ));
