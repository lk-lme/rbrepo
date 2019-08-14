import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import Badge from '.';
import Readme from './README.md';

storiesOf('Core/Badge', module)
  .addDecorator(withKnobs)
  .addDecorator(PaddingDecorator())
  .addParameters({ readme: { sidebar: Readme } })
  .add('Default', () => (
    <Badge>{text('Label', 'Draft')}</Badge>
  ))
  .add('Warning', () => (
    <Badge type="warning">{text('Label', 'Submitted')}</Badge>
  ))
  .add('Danger', () => (
    <Badge type="danger">{text('Label', 'Rejected')}</Badge>
  ))
  .add('Success', () => (
    <Badge type="success">{text('Label', 'Approved')}</Badge>
  ));
