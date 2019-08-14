import React from 'react';
import { storiesOf } from '@storybook/react';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Badge from '.';
import Readme from './README.md';

storiesOf('Core/Badge', module)
  .addDecorator(PaddingDecorator())
  .addParameters({ readme: { sidebar: Readme } })
  .add('Default', () => (
    <Badge>Draft</Badge>
  ))
  .add('Warning', () => (
    <Badge type="warning">Submitted</Badge>
  ))
  .add('Danger', () => (
    <Badge type="danger">Rejected</Badge>
  ))
  .add('Success', () => (
    <Badge type="success">Approved</Badge>
  ));
