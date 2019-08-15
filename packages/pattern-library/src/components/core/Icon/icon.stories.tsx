import React from 'react';
import { storiesOf } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import PaddingDecorator from 'Decorators/PaddingDecorator';
import TickCircleIcon from 'SVG/circle-tick.svg';
import Icon from '.';
import README from './README.md';

storiesOf('Core/Icon', module)
  .addDecorator(PaddingDecorator())
  .addParameters({ readme: { sidebar: README } })
  .add('Base', () => (
    <Icon component={TickCircleIcon} />
  ))
  .add('Custom color with CSS Var', () => (
    <div style={{ '--icon-fill': 'red' }}>
      <Icon component={TickCircleIcon} />
    </div>
  ))
  .add('Custom size with CSS Var', () => (
    <div style={{ '--icon-size': '3rem' }}>
      <Icon component={TickCircleIcon} />
    </div>
  ));
