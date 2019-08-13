import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Badge from '.';
import Readme from './README.md';

storiesOf('Badge', module)
  .addDecorator(PaddingDecorator())
  .addParameters({ readme: { sidebar: Readme } })
  .add('default', () => (
    <Badge>Draft</Badge>
  ))
  .add('warning', () => (
    <Badge type="warning">Submitted</Badge>
  ))
  .add('danger', () => (
    <Badge type="danger">Rejected</Badge>
  ))
  .add('success', () => (
    <Badge type="success">Approved</Badge>
  ));
